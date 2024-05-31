import React from "react";
import Hero from "../components/home/hero";
import Specials from "../components/home/special";
import Testimonial from "./home/testimonial";
import About from "./home/about";

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
