"use client";
import Link from "next/link";
import React, { useState } from "react";

import {
  FiChevronDown,
  FiChevronUp,
  FiFilter,
  FiGlobe,
  FiHome,
  FiLink,
  FiMail,
  FiSend,
  FiSettings,
  FiShare2,
  FiTrash2,
  FiUserPlus,
} from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineAddLink } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { RiSettings5Fill, RiUserSettingsLine } from "react-icons/ri";
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
      path: "/dashboard",
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
          title: "Create Link",
          path: "/create-site",
          icon: <MdOutlineAddLink />,
        },
      ],
    },
    {
      title: "Deployments",
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
  ];
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleSubmenuClick = (path: string) => {
    setOpenSubmenu(openSubmenu === path ? null : path);
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-900 text-white relative">
        <div className="flex items-center justify-center h-16 border-b border-gray-800">
          <span className="text-xl font-semibold flex items-center gap-4">
            Linkify <FaLeaf />{" "}
          </span>
        </div>
        <nav className="mt-8">
          <div className="px-2">
            {menuItems.map((menuItem) => (
              <div key={menuItem.path}>
                <Link
                  href={""}
                  className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-800 transition-all"
                >
                  {menuItem.icon}
                  <span className="ml-2">{menuItem.title}</span>
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
                </Link>
                {menuItem.submenu && openSubmenu === menuItem.path && (
                  <div className="ml-8 transition-all">
                    {menuItem.submenu.map((submenuItem) => (
                      <Link
                        key={submenuItem.path}
                        href={""}
                        className="block px-4 py-2 text-sm rounded-md hover:bg-gray-800 flex items-center gap-2"
                      >
                        {submenuItem.icon} {submenuItem.title}
                      </Link>
                    ))}
                  </div>
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
