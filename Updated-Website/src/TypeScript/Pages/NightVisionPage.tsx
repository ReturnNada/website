import { Carousel, CarouselItem } from "react-bootstrap";

import NavigationBar from "../NavBar";
import "../../App.css";
import NV1 from "../../assets/NV1.jpg";
import NV2 from "../../assets/NV2.jpg";
import NightVision from "../../assets/Night_Vision.jpg";

function NightVisionPage() {
  return (
    <div className="cardAnim">
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>
        Night Vision
      </h1>
      <br />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Carousel
          slide
          interval={null}
          variant="dark"
          style={{ width: "80%", justifySelf: "center" }}
        >
          <CarouselItem className="carousel-item">
            <img
              src={NV2}
              className="d-block"
              style={{
                height: "50vh",
                justifySelf: "center",
              }}
            />
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <img
              src={NV1}
              className="d-block"
              style={{
                height: "50vh",
                justifySelf: "center",
              }}
            />
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <img
              src={NightVision}
              className="d-block"
              style={{
                height: "50vh",
                justifySelf: "center",
              }}
            />
          </CarouselItem>
        </Carousel>
      </div>
      <br />
      <p
        className="toppy projectText"
        style={{
          width: "66%",
          justifySelf: "center",
          paddingBottom: "50px",
        }}
      >
        I got tired of needing to use a flashlight to see in the dark, so I
        decided to build a pair of Night Vision goggles using a Raspberry Pi
        Zero W, an IR camera, an LCD display, and a trusty hard hat. Uses python
        scripting.
      </p>
    </div>
  );
}

export default NightVisionPage;
