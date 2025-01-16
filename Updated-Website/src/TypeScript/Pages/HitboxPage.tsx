import NavigationBar from "../NavBar";
import "../../App.css";
import Soldering from "../../assets/Soldering.jpg";
import HitboxDemo from "../../assets/HitboxDemo.mp4";
import Hitbox from "../../assets/Hitbox.jpg";
import { Carousel, CarouselItem } from "react-bootstrap";

function HitboxPage() {
  return (
    <div className="cardAnim">
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>(s)HitBox</h1>
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
          style={{ width: "100%", justifySelf: "center" }}
        >
          <CarouselItem className="carousel-item">
            <img
              src={Soldering}
              className="d-block"
              style={{
                height: "50vh",
                justifySelf: "center",
              }}
            />
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <img
              src={Hitbox}
              className="d-block"
              style={{
                height: "50vh",
                justifySelf: "center",
              }}
            />
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <video
              src={HitboxDemo}
              className="d-block"
              controls
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
        Some players in the fighting game community prefer to compete with
        controllers following a box format, so I decided to make a custom one of
        my own to see if I liked it. Using a raspberry pi pico, the leftover
        cardboard packaging of a CASIO calculator, a plastic container, 20
        keycaps, tape, failed solders, and prayers, this device is
        cross-compatible with the Nintendo Switch and Computers for Smash
        Ultimate and Melee, respectively.
      </p>
    </div>
  );
}

export default HitboxPage;
