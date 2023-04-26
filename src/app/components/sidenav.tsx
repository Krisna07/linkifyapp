"use client";
import Link from "next/link";
import React, { useState } from "react";

import {
  FiChevronDown,
  FiChevronUp,
  FiFilter,
  FiGlobe,
  FiHome,
  FiSettings,
  FiShare,
  FiShare2,
} from "react-icons/fi";
import { FaLeaf, FaShare } from "react-icons/fa";
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
          title: "All Sites",
          path: "/sites",
        },
        {
          title: "Create Site",
          path: "/create-site",
        },
      ],
    },
    {
      title: "Sites",
      path: "/sites",
      icon: <FiGlobe />,
      submenu: [
        {
          title: "All Sites",
          path: "/sites",
        },
        {
          title: "Create Site",
          path: "/create-site",
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
        },
        {
          title: "Site Settings",
          path: "/site-settings",
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
      <div className="w-64 bg-gray-900 text-white">
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
                  className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-800"
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
                  <div className="ml-8">
                    {menuItem.submenu.map((submenuItem) => (
                      <Link
                        key={submenuItem.path}
                        href={""}
                        className="block px-4 py-2 text-sm rounded-md hover:bg-gray-800"
                      >
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div className="flex-1 bg-gray-100"></div>
    </div>
  );
};

export default Sidenav;
