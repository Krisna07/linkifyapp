"use client";
import React, { useState } from "react";
import { FaBars, FaChevronRight, FaHome, FaUser } from "react-icons/fa";
const Sidenav = () => {
  const [nav, setNav] = useState<Boolean>(true);
  return (
    <div
      className={`${
        nav ? "w-1/6" : "w-[100px]"
      } h-[100vh] bg-red-200 flex flex-col gap-4 items-center transition-all text-black`}
    >
      <div className="w-full p-4 bg-green-200 h-fit text-black flex items-center justify-between">
        <span className="w-[40px] h-[40px] rounded-full bg-black flex items-center text-white justify-center">
          <FaUser />
        </span>
        <span onClick={() => setNav(!nav)}>
          {nav ? <FaBars /> : <FaChevronRight />}
        </span>
      </div>
      <div className="w-full h-fit flex items-center justify-between box-border p-2 bg-yellow-200">
        <FaHome />
        Home
      </div>
      <div className="w-full  h-fit  flex items-center justify-between box-border p-2 bg-yellow-200">
        <FaHome />
        Home
      </div>{" "}
      <div className="w-full  h-fit  flex items-center justify-between box-border p-2 bg-yellow-200">
        <FaHome />
        Home
      </div>{" "}
      <div className="w-full  h-fit  flex items-center justify-between box-border p-2 bg-yellow-200">
        <FaHome />
        Home
      </div>
    </div>
  );
};

export default Sidenav;
