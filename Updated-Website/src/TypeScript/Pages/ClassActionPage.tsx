import { Carousel, CarouselItem } from "react-bootstrap";

import "../../App.css";
import CASS5 from "../../assets/CASS5.png";
import CASS6 from "../../assets/CASS6.png";
import CASS7 from "../../assets/CASS7.png";
import CASS8 from "../../assets/CASS8.png";

import NavigationBar from "../NavBar";

function ClassActionPage() {
  return (
    <div className="cardAnim">
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>
        Class Action
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
              src={CASS8}
              className="d-block carousel-img"
              style={{
                height: "50vh",
                justifySelf: "center",
              }}
            />
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <img
              src={CASS7}
              className="d-block carousel-img"
              style={{
                height: "50vh",
                justifySelf: "center",
              }}
            />
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <img
              src={CASS6}
              className="d-block carousel-img"
              style={{
                height: "50vh",
                justifySelf: "center",
              }}
            />
          </CarouselItem>
          <CarouselItem className="carousel-item">
            <img
              src={CASS5}
              className="d-block carousel-img"
              style={{
                height: "50vh",
                justifySelf: "center",
              }}
            />
          </CarouselItem>
        </Carousel>
        <br />
        <a href="https://returnnada.itch.io/class-action">
          Link to itch.io page
        </a>
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
        Published under Azimuth Entertainment, a game development company
        established in 2009, Class Action is a turn-based class fighter based on
        the likes of "Worms" and "Territory War" with local multiplayer being
        the focus. I wrote 13 major C# logic scripts (accounts for movement,
        hitbox/hurtbox detection, spawning objects, etc), created 3 unique
        characters complete with movesets and animations, made 5 background
        assets and designed 9 scenes, including maps and selection menus.
      </p>
    </div>
  );
}

export default ClassActionPage;
