import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let [menu, setMenu] = useState(false);
  return (
    <nav className="flex justify-between sm:mx-[80px] mx-[20px] items-center h-[70px] border-2 border-b-[#E6E6E6] border-t-0 border-l-0 border-r-0 font-manrope">
      <div>
        <h1 className="font-extrabold">Nexorith Nepal</h1>
      </div>
      <ul className="sm:inline-flex gap-[20px] font-[400] hidden transition-all ease-linear ">
        <li className="relative">
          <NavLink
            to="/"
            className="border-b-[4px] border-b-transparent  box-border focus:border-b-[#6864F9] active:border-b-[#6864F9] pb-[23px]"
          >
            Home
          </NavLink>
        </li>

        <li className="relative">
          <NavLink className="border-b-[4px] border-b-transparent  box-border focus:border-b-[#6864F9] active:border-b-[#6864F9] pb-[23px]">
            Investment plan
          </NavLink>
        </li>
        <li className="relative">
          <NavLink className="border-b-[4px] border-b-transparent  box-border focus:border-b-[#6864F9] active:border-b-[#6864F9] pb-[23px]">
            Project
          </NavLink>
        </li>
        <li className="relative">
          <NavLink className="border-b-[4px] border-b-transparent  box-border focus:border-b-[#6864F9] active:border-b-[#6864F9] pb-[23px]">
            About us
          </NavLink>
        </li>
      </ul>
      <div className="sm:flex gap-[15px] hidden">
        <NavLink className="text-[#282828] border-2 border-transparent h-[27px] w-[50px] text-center rounded-sm font-[500] ">
          Log In
        </NavLink>
        <NavLink className="text-[#6864F9] border-2 border-[#6864F9] h-[30px] w-[90px] text-center rounded-sm font-[600] ">
          Sign Up
        </NavLink>
      </div>
      <div className="sm:hidden text-[25px] text-[#6864F9]">
        <IoMenu />
      </div>
    </nav>
  );
};

export default NavBar;
