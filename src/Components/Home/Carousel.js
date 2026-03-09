import React, { useState, useEffect, useRef, useCallback } from "react";
import "../main.css";
import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { TypeAnimation } from "react-type-animation";
import Main1 from "../../assets/main.jpg";
import Main2 from "../../assets/Group-Photo.jpeg";
import TeachersDay from "../../assets/Teachersdaypic.JPG";
import Events from "../../assets/Events.JPG";
import Main5 from "../../assets/main5.jpg";
import LogoVid from "../../assets/Logovid.mp4";

const INTERVALS = [8000, 5000, 5000, 5000, 5000, 5000];
const TOTAL_SLIDES = 6;

function CarouselItem() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const scheduleNext = useCallback((currentIndex) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      const next = (currentIndex + 1) % TOTAL_SLIDES;
      setIndex(next);
      scheduleNext(next);
    }, INTERVALS[currentIndex]);
  }, []);

  useEffect(() => {
    scheduleNext(0);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [scheduleNext]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    scheduleNext(selectedIndex);
  };

  return (
    <div className="max_height">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        controls={true}
        indicators={false}
      >

        <Carousel.Item>
          <video
            className="d-block custom_height"
            src={LogoVid}
            autoPlay
            muted
            playsInline
            preload="none"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block custom_height"
            src={Main2}
            alt="Members"
          />
          <Carousel.Caption>
            <TypeAnimation
              cursor={true}
              sequence={["Members", 5000, ""]}
              wrapper="h2"
              repeat={Infinity}
            />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block custom_height"
            src={TeachersDay}
            alt="Teachers Day"
          />
          <Carousel.Caption>
            <TypeAnimation
              cursor={true}
              sequence={["Teachers Day", 5000, ""]}
              wrapper="h2"
              repeat={Infinity}
            />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block custom_height"
            src={Events}
            alt="Events"
          />
          <Carousel.Caption>
            <TypeAnimation
              cursor={true}
              sequence={["Events", 5000, ""]}
              wrapper="h2"
              repeat={Infinity}
            />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block custom_height"
            src={Main5}
            alt="Faculty"
          />
          <Carousel.Caption>
            <TypeAnimation
              cursor={true}
              sequence={["Faculty", 3000, ""]}
              wrapper="h2"
              repeat={Infinity}
            />
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block custom_height"
            src={Main1}
            alt="About"
          />
          <Carousel.Caption>
            <TypeAnimation
              cursor={true}
              sequence={["About Us", 5000, ""]}
              wrapper="h2"
              repeat={Infinity}
            />
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default CarouselItem;