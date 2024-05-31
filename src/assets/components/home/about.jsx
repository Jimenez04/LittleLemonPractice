import React from "react";
import About_img from "../../img/img_about.png";
import "../../css/home_hero.css";

export default function about() {
  return (
    <div id="hero" className="max_width ">
      <div className="hero_container flex flex_space_between">
        <div className="hero_container_info flex flex_change_direction flex_space_between ">
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
              <br />
              <br />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea
            </p>
          </div>
        </div>
        <div className="about_container_imgs">
          <img src={About_img} />
        </div>
      </div>
    </div>
  );
}
