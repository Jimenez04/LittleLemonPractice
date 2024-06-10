import React from "react";
import Menu from "./nav";
import LogoFooter from "../img/logo/Logo2.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../css/footer.css";

export default function footer() {
  return (
    <footer className="flex flex_center_x  ">
      <div className="footer_container max_width flex flex_space_between flex_center_y">
        <div className="footer_container_logo">
          <a href="" onClick={() => navigate("/")}>
            <img src={LogoFooter} />
          </a>
        </div>
        <div id="footer_nav" className="">
          <Menu />
        </div>
        <div id="contact" className="footer_container_info">
          <div>
            <label>Contact</label>
          </div>
          <div>
            <div>
              <a>Address</a>
            </div>
            <div>
              <a>Phone Number</a>
            </div>
            <div>
              <a>Email</a>
            </div>
          </div>
        </div>
        <div id="social_media" className="footer_container_info">
          <div>
            <label>Social Media</label>
          </div>
          <div>
            <div>
              <a>Facebook</a>
            </div>
            <div>
              <a>Instagram</a>
            </div>
            <div>
              <a>WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
