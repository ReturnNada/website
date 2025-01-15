import { Carousel, CarouselItem } from "react-bootstrap";

import NavigationBar from "../NavBar";
import "../../App.css";
import NV1 from "../../assets/NV1.jpg";
import NV2 from "../../assets/NV2.jpg";
import NightVision from "../../assets/Night_Vision.jpg";

function NightVisionPage() {
  return (
    <div>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>
        Night Vision
      </h1>
      <br />
      <br />
      <Carousel
        slide
        interval={null}
        variant="dark"
        style={{ width: "66%", justifySelf: "center" }}
      >
        <CarouselItem className="carousel-item">
          <img src={NV1} className="d-block w-100" />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <img src={NV2} className="d-block w-100" />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <img src={NightVision} className="d-block w-100" />
        </CarouselItem>
      </Carousel>
      <p className="toppy projectText">
        I got tired of needing to use a flashlight to see in the dark, so I
        decided to build a pair of Night Vision goggles using a Raspberry Pi
        Zero W, an IR camera, an LCD display, and a trusty hard hat. Uses python
        scripting.
      </p>
    </div>
  );
}

export default NightVisionPage;
