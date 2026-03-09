import React from "react";
import NavBar from "./NavBar";
import "./main.css";
import CarouselItem from "./Home/Carousel";
import About from "./Home/About";
import WhyJoin from "./Home/WhyJoin";
import Testimonial from "./Home/Testimonial";
import Stats from "./Home/Stats";
// import Opinion from "./Home/Opinion";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <CarouselItem />
      </div>
      <About />
      <WhyJoin />
      <Stats />
      <Testimonial/>
      {/* <Opinion/> */}
      <Footer/>
    </>
  );
};

export default Main;
