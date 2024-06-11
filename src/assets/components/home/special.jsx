import React from "react";
import "../../css/home_special.css";
import Cards from "./special/cards";

export default function special() {
  return (
    <div id="specials" className="max_width">
      <div className="specials_container  ">
        <div className="specials_container_top flex flex_space_between">
          <div className="specials_container_top_tittle">
            <h1>Specials</h1>
          </div>
          <div className="specials_container_top_btn">
            <button
              onClick={() => {
                alert("hey!");
              }}
              className="btn"
            >
              Online Menu
            </button>
          </div>
        </div>
        <div className="specials_container_cards flex">
          <Cards />
        </div>
      </div>
    </div>
  );
}
