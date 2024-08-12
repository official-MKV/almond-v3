import React from "react";
import Logo from "../assets/Brand Logo Files/RGB/PRIMARY LOGO LOCKUP/SVG/LOGO ORIGINAL.svg";
import { NavLinks } from "../data";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
const Nav = () => {
  const [bgGray, setBgGray] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgGray(true);
      } else {
        setBgGray(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full flex items-center justify-center ${
        bgGray ? "bg-gray-50" : "bg-none"
      } transition-all duration-700 ease-in-out`}
    >
      <div className="flex items-center justify-between w-[80vw]">
        <div className="relative size-[100px] flex items-center">
          <img src={Logo} />
        </div>
        <div className="md:flex hidden flex-col gap-5 ">
          <div
            className={`text-[white] flex gap-10 justify-center ${
              bgGray && "text-[black]"
            }`}
          >
            {NavLinks.map((item, key) => {
              return (
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    isActive ? "text-[#662D91]" : "relative text-black"
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>

          <div className="h-[1px] bg-[white]/20" />
        </div>
        <div
          className={`text-[40px] md:hidden text-[white] ${
            bgGray && "text-black"
          }`}
        >
          <IoMdMenu />
        </div>

        <div
          className={`cursor-pointer group relative overflow-hidden  px-[10px] py-[7px] md:block hidden  border-[3px] ${
            bgGray
              ? "border-[gray]/20 rounded-[8px] text-[white] hover:bg-purple-950  "
              : "border-[white] rounded-[8px] text-white  hover:text-white hover:bg-gradient-to-r hover:from-purple-950 hover:to-purple-400 "
          }   `}
          id="button"
        >
          <span className="relative z-20 font-medium ">Get the App</span>
          <div
            class={`group-hover:hidden z-10 absolute inset-0 ${
              bgGray
                ? "bg-gradient-to-r from-purple-950 to-purple-400"
                : "bg-white/20"
            } bg-opacity `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
