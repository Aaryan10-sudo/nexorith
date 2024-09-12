import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between mx-[80px] items-center h-[70px] border border-b-[#E6E6E6] border-t-0 border-l-0 border-r-0 font-manrope">
      <div>
        <h1 className="font-extrabold">Nexorith Nepal</h1>
      </div>
      <ul className="inline-flex gap-[20px] font-[400] ">
        <li>Home</li>
        <li>Investment plan</li>
        <li>Project</li>
        <li>About us</li>
      </ul>
      <div className="flex gap-[15px]">
        <NavLink className="text-[#282828] border-2 border-transparent h-[27px] w-[50px] text-center rounded-sm font-[500] ">
          Log In
        </NavLink>
        <NavLink className="text-[#6864F9] border-2 border-[#6864F9] h-[30px] w-[90px] text-center rounded-sm font-[600] ">
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
