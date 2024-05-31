import React from "react";
import "../../css/testimonial.css";
import Items from "./testimonials_item/cards";

export default function testimonial() {
  return (
    <div id="testimonial" className="testimonial max_width">
      <div className="testimonial_container"></div>
      <div className="testimonial_container_tittle">
        <h1>Testimonial</h1>
      </div>
      <div className="testimonial_container_content flex ">
        <Items></Items>
      </div>
    </div>
  );
}
