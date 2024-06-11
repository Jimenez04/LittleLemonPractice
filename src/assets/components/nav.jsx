import {React, useState} from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <>
      <button className="btn_nav" onClick={toggleMenu}></button>
    <nav className={` ${showMenu ? "show" : ""} `} >
      <ul className="flex flex_space_between">
        <li id="" className="">
          <NavLink className="" to="/" onClick={closeMenuOnMobile}>
            Home
          </NavLink>
        </li>
        <li id="" className="">
          <a onClick={closeMenuOnMobile} href="#specials">Menu</a>
        </li>
        <li id="" className="">
          <a onClick={closeMenuOnMobile} href="#about">About</a>
        </li>
        <li id="" className="">
          <NavLink className="" to="/reservation" onClick={closeMenuOnMobile}>
            Reservation
          </NavLink>
        </li>
        <li id="" className="">
          <a href="#order_online" onClick={closeMenuOnMobile}>Order Online</a>
        </li>
        <li id="" className="">
          <a href="" onClick={closeMenuOnMobile}>Sign Up</a>
        </li>
      </ul>
    </nav>
    </>
  );
}
