import React from "react";
import Ismael from "../../../img/img_ismael.png";

export default function cards() {
  const items = [];
  for (let index = 0; index < 6; index++) {
    items.push(
        <div key={index} className="testimonial_container_content_items">
        <div className="testimonial_container_content_items_subcontainer flex flex_change_direction">
          <div className="testimonial_container_content_items_subcontainer_top flex ">
            <div className="testimonial_container_content_items_subcontainer_top_img">
              <img height={80} width={100} src={Ismael} />
            </div>
            <div className="testimonial_container_content_items_subcontainer_top_name">
              <span>Ismael Pérez</span>
            </div>
          </div>
          <div className="testimonial_container_content_items_subcontainer_text">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diam nonumy eirmod tempor invidunt ut labore et dolore.Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore.Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>
    );
  }
  return items;
}
