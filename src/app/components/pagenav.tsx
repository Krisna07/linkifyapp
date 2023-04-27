import React from "react";

import { FaUserCircle, FaCog } from "react-icons/fa";
import Button from "./ui/Button";
import { FiSearch } from "react-icons/fi";
import { RiFilter3Line } from "react-icons/ri";

// interface NavbarProps {
//   activeMenu: string;
//   onMenuChange: (menu: string) => void;
// }

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-800">
      <div className="w-2/4 flex justify-center items-center relative">
        <input
          type="text"
          className="px-8 py-2 w-full rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-[1px]"
          placeholder="Search"
        />
        <FiSearch size={18} className="absolute left-2 text-bold" />
        <RiFilter3Line size={18} className="absolute right-2 text-bold" />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center text-sm  rounded-full border-2 border-gray-500 gap-2 px-4 py-[4px] hover:bg-white hover:text-black font-[600]">
          Active <div className="bg-green-800 w-2 h-2 rounded-full"></div>
        </div>
        <Button variant="icon">
          <FaUserCircle size={24} />
        </Button>
        <Button variant="icon">
          <FaCog size={24} />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;