import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import Cross from "../assets/cross_icon.png";
import MenuIcon from "../assets/menu_icon.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={Logo}
        alt=""
      />

      <div className="hidden md:inline-flex bg-[#f5f5f0] py-2 px-4 rounded-full gap-6 text-sm">
        <NavLink
          to="/"
          className="text-gray-600 hover:text-[#00008B] transition-colors"
        >
          HOME
        </NavLink>
        <NavLink
          to={"/about"}
          className="text-gray-600 hover:text-[#00008B] transition-colors"
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/alumini"
          className="text-gray-600 hover:text-[#00008B] transition-colors"
        >
          ALUMINI
        </NavLink>
        <NavLink
          to="/faculty"
          className="text-gray-600 hover:text-[#00008B] transition-colors"
        >
          FACULTY
        </NavLink>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => navigate("/registration-form")}
          className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
        >
          GET ADDED
        </button>
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={MenuIcon}
          alt=""
        />
        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={Logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={Cross}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/alumini">
              <p className="px-4 py-2 rounded inline-block">ALUMINI </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/faculty">
              <p className="px-4 py-2 rounded inline-block">FACULTY</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
