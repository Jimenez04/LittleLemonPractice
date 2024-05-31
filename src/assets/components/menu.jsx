import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function menu() {
  return (
    <nav className="">
      <ul className="flex flex_space_between">
        <li id="" className="">
          <NavLink className="" to="/">
            Home
          </NavLink>
        </li>
        <li id="" className="">
          <a href="#specials">Menu</a>
        </li>
        <li id="" className="">
          <a href="#about">About</a>
        </li>
        <li id="" className="">
          <NavLink className="" to="/reservation">
            Reservation
          </NavLink>
        </li>
        <li id="" className="">
          <a href="#order_online">Order Online</a>
        </li>
        <li id="" className="">
          <a href="">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
