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
          <NavLink className="" to="/" onClick={closeMenuOnMobile} aria-label="Home">
            Home
          </NavLink>
        </li>
        <li id="" className="">
          <a onClick={closeMenuOnMobile} href="#specials" aria-label="Menu">Menu</a>
        </li>
        <li id="" className="">
          <a onClick={closeMenuOnMobile} href="#about" aria-label="About">About</a>
        </li>
        <li id="" className="">
          <NavLink className="" to="/reservation" onClick={closeMenuOnMobile} aria-label="Reservation">
            Reservation
          </NavLink>
        </li>
        <li id="" className="">
          <a href="#order_online" onClick={closeMenuOnMobile} aria-label="Order Online">Order Online</a>
        </li>
        <li id="" className="">
          <a href="" onClick={closeMenuOnMobile} aria-label="Sign Up">Sign Up</a>
        </li>
      </ul>
    </nav>
    </>
  );
}
