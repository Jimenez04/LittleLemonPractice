import React from "react";
import ImgCard from "../../../img/img_card.jpg";
export default function cards() {
  const items = [];
  for (let index = 0; index < 6; index++) {
    items.push(
      <div key={index} className="specials_container_cards_item flex flex_change_direction">
        <div className="specials_container_cards_item_img">
          <img width="300" height="200" src={ImgCard} />
        </div>
        <div className="specials_container_cards_item_content flex flex_change_direction flex_space_between">
          <div className="specials_container_cards_item_content_top flex flex_space_between">
            <div className="specials_container_cards_item_content_top_name">
              <span>Greek Salad</span>
            </div>
            <div className="specials_container_cards_item_content_top_price">
              <span>$12.00</span>
            </div>
          </div>
          <div className="specials_container_cards_item_content_text">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore.
            </p>
          </div>
          <div className="specials_container_cards_item_content_delivery">
            <span>Delivery $4</span>
          </div>
        </div>
      </div>
    );
  }
  return items;
}
