"use client";
import Link from "next/link";
import React, { useState } from "react";

import {
  FiChevronDown,
  FiChevronUp,
  FiFilter,
  FiGlobe,
  FiHeart,
  FiHome,
  FiLink,
  FiMail,
  FiSend,
  FiSettings,
  FiShare2,
  FiTrash2,
  FiUserPlus,
} from "react-icons/fi";
import {
  FaFileContract,
  FaLeaf,
  FaSubscript,
  FaUser,
  FaUserCheck,
} from "react-icons/fa";
import { MdOutlineAddLink } from "react-icons/md";
import { VscAccount, VscSignOut } from "react-icons/vsc";
import {
  RiFilter2Line,
  RiFilterLine,
  RiSettings5Fill,
  RiUserSettingsLine,
} from "react-icons/ri";
interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  path: string;
}

interface SidenavProps {
  menuItems: MenuItem[];
}

const Sidenav: React.FC<SidenavProps> = () => {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FiHome />,
    },
    {
      title: "Shares",
      path: "/shares",
      icon: <FiShare2 />,
      submenu: [
        {
          title: "Received",
          path: "/Links",
          icon: <FiMail />,
        },
        {
          title: "Sent",
          path: "/create-site",
          icon: <FiSend />,
        },
        {
          title: "Requests",
          path: "/create-site",
          icon: <FiUserPlus />,
        },
        {
          title: "Trash",
          path: "/create-site",
          icon: <FiTrash2 />,
        },
      ],
    },
    {
      title: "Links",
      path: "/Links",
      icon: <FiGlobe />,
      submenu: [
        {
          title: "All Links",
          path: "/Links",
          icon: <FiLink />,
        },
        {
          title: "Favourites",
          path: "/Links",
          icon: <FiHeart />,
        },
        {
          title: "Create Link",
          path: "/create-site",
          icon: <MdOutlineAddLink />,
        },
      ],
    },
    {
      title: "Analytics",
      path: "/deployments",
      icon: <FiFilter />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FiSettings />,
      submenu: [
        {
          title: "Account Settings",
          path: "/account-settings",
          icon: <RiUserSettingsLine />,
        },
        {
          title: "Site Settings",
          path: "/site-settings",
          icon: <RiSettings5Fill />,
        },
      ],
    },
    {
      title: "Catagories",
      path: "/gggge",
      icon: <FaFileContract />,
    },
    {
      title: "User",
      path: "/catac",
      icon: <FaUser />,
      submenu: [
        {
          title: "User Details",
          icon: <FaUserCheck />,
        },
        {
          title: "Subscription",
          icon: <VscAccount />,
        },
      ],
    },
  ];
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleSubmenuClick = (path: string) => {
    setOpenSubmenu(openSubmenu === path ? null : path);
  };

  return (
    <div className="w-full flex h-screen overflow-hidden ">
      <div className="w-full bg-gray-900 text-white relative">
        <div className="flex items-center justify-center h-16 border-b border-gray-800">
          <span className="text-xl font-semibold flex items-center gap-4">
            Linkify <FaLeaf />{" "}
          </span>
        </div>
        <nav className="mt-8">
          <div className="px-2 sideMenu">
            {menuItems.map((menuItem) => (
              <div key={menuItem.path}>
                <div
                  
                  className="flex gap-2 items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-800 transition-all"
                >
                  {menuItem.icon}
                  {menuItem.path ? <Link href={menuItem.path}>{menuItem.title}</Link>:<span className="ml-2">{menuItem.title}</span>}
                  {menuItem.submenu && (
                    <div
                      className="ml-auto"
                      onClick={() => handleSubmenuClick(menuItem.path)}
                    >
                      {openSubmenu === menuItem.path ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </div>
                  )}
                </div>
                {menuItem.submenu && openSubmenu === menuItem.path && (
                  <div className="ml-8 transition-all">
                    {menuItem.submenu.map((submenuItem) => (
                      <Link
                        key={submenuItem.title}
                        href={""}
                        className="block px-4 py-2 text-sm rounded-md hover:bg-gray-800 flex items-center gap-2"
                      >
                        {submenuItem.icon} {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                )}
                {menuItems.indexOf(menuItem) === 4 && (
                  <div className="border-t border-gray-800 my-2"></div>
                )}
              </div>
            ))}
          </div>
        </nav>
        <div className="px-2 w-full items-center flex gap-2 absolute bottom-0 px-8 py-4 bg-gray-800">
          <VscSignOut /> Sign out
        </div>
      </div>
      <div className="flex-1 bg-gray-100"></div>
    </div>
  );
};

export default Sidenav;
