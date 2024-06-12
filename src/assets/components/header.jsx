import React from "react";
import Logo from "../img/logo/Logo.png";
import Menu from './nav';
import "../css/header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
  return (
    <header className="flex flex_center_x">
      <div id="header_container" className="flex flex_center_y max_width flex_space_between">
        <div>
          <a href="" onClick={() => navigate("/")}>
            <img src={Logo} />
          </a>
        </div>
        <Menu />
      </div>
    </header>
  );
}
