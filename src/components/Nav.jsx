import React from "react";

import { nav } from "../data";

const Nav = () => {
  return (
    <div>
      <ul>
        {nav.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index}>
              <a className="hover:text-secondary transition"  href={href}> {name} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
