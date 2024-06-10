import React from "react";
import "../../css/reservation.css";
import Bookingpage from './bookingform'

export default function reservations() {
  return (
    <section id="reservation" className="flex flex_center_x">
      <Bookingpage></Bookingpage>
    </section>
  );
}
