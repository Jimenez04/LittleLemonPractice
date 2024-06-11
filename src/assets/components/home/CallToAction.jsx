import React from "react";
import Hero_img from "../../img/hero_img.png";
import "../../css/home_hero.css";
import { useNavigate } from "react-router-dom";

export default function hero() {
  const navigate = useNavigate();
  return (
    <div id="hero" className="max_width ">
      <div className="hero_container flex flex_space_between">
        <div className="hero_container_info flex flex_change_direction flex_space_between">
          <div className="hero_container_info_tittle">
            <h1>Little Lemon</h1>
          </div>
          <div className="hero_container_info_sub_tittle">
            <h2>Chicago</h2>
          </div>
          <div className="hero_container_info_text">
            <p>
              Little Lemon is a charming neighborhood bistro that serves simple
              food and classic cocktails in a livery but casual environment. The
              restaurant features a locally-sourced menu with daily special.
              <br/>
              <br/>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
               <br/>
               <br/>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam
            </p>
          </div>
          <div className="hero_container_info_btn">
                      <button onClick={ () => navigate("/reservation") } className="btn">Reserve a Table</button>
          </div>
        </div>
        <div className="hero_container_img flex flex_center_x">
          <img src={Hero_img} />
        </div>
      </div>
    </div>
  );
}
