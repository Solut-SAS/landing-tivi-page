import React from "react";

import { nav } from "../data";
import { HiOutlineX } from "react-icons/hi";
import navImage from "../assets/header/navLogo.png";

const MobileNav = ({ changeMobileNav }) => {
  return (
    <div className="bg-white w-full h-full">
      <div className="p-5 flex justify-between">
        <a href="hero" data-aos="fade-down" data-aos-delay="1000">
          <img src={navImage} alt="logo" className="w-8" />
        </a>
        <HiOutlineX
          className="text-3xl text-secondary mr-2 mt-2"
          onClick={() => changeMobileNav(false)}
        />
      </div>
      <ul className="h-full flex flex-col justify-center items-center align-middle gap-y-8 -mt-20">
        {nav.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index} onClick={() => changeMobileNav(false)}>
              <a
                className="link text-secondary text-2xl font-semibold"
                href={href}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="h-full flex justify-between -mt-12 px-10 text-slate-400">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
      </ul>
    </div>
  );
};

export default MobileNav;
