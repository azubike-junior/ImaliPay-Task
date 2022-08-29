import React, { ReactNode } from "react";
// import { Link } from 'react-router-dom'
import { useLocation, NavLink, Link } from "react-router-dom";

interface MenuProp {
  icon: string;
  title: string;
  link: string;
}

export default function Menu({ icon, title, link }: MenuProp) {


  return (
    <NavLink to={link}>
      <div className="flex items-center pb-8">
        <span className="pr-4">
          <img className="text-tintedAsh" src={icon} alt={title} />
        </span>
        <a className="font-inter text-gray-500 ">
          {title}
        </a>
      </div>
    </NavLink>
  );
}
