import { Link } from "react-router";
import { Carousel, CarouselItem } from "react-bootstrap";

import "../../App.css";
import CASS0 from "../../assets/CASS0.png";
import CASS1 from "../../assets/CASS1.png";
import CASS2 from "../../assets/CASS2.png";

import NavigationBar from "../NavBar";

function ClassActionPage() {
  return (
    <>
      <NavigationBar />
      <h1 style={{ justifySelf: "center", paddingTop: "100px" }}>
        Class Action
      </h1>
      <Carousel
        slide
        interval={null}
        variant="dark"
        style={{ width: "66%", justifySelf: "center" }}
      >
        <CarouselItem className="carousel-item">
          <img src={CASS0} className="d-block w-100" />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <img src={CASS1} className="d-block w-100" />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <img src={CASS2} className="d-block w-100" />
        </CarouselItem>
      </Carousel>
      <br />
      <p className="toppy projectText">
        Published under Azimuth Entertainment, a game development company
        established in 2009, Class Action is a turn-based class fighter based on
        the likes of "Worms" and "Territory War" with local multiplayer being
        the focus. I wrote 13 major C# logic scripts (accounts for movement,
        hitbox/hurtbox detection, spawning objects, etc), created 3 unique
        characters complete with movesets and animations, made 5 background
        assets and designed 9 scenes, including maps and selection menus.
      </p>
      <br />
      <Link
        to="/website/Projects/"
        className="toppy"
        style={{
          justifySelf: "center",
        }}
      >
        Back
      </Link>
    </>
  );
}

export default ClassActionPage;
