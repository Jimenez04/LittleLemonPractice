import React from "react";
import Hero from "./CallToAction";
import Specials from "./special";
import Testimonial from "./CustomersSay";
import About from "./about";

export default function home() {
  return (
    <>
      <section className="flex flex_center_x">
        <Hero />
      </section>
      <section className="flex flex_center_x">
        <Specials />
      </section>
      <section className="flex flex_center_x">
        <Testimonial></Testimonial>
      </section>
      <section id="about" className="flex flex_center_x">
        <About />
      </section>
    </>
  );
}
