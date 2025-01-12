import { Link } from "react-router";
import { Carousel, CarouselItem } from "react-bootstrap";

import "../../App.css";
import CASS0 from "../../assets/CASS0.png";
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
          <img src={CASS0} className="d-block w-100" />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <img src={CASS0} className="d-block w-100" />
        </CarouselItem>
      </Carousel>
      <Link to="/Projects/">Back</Link>
    </>
  );
}

export default ClassActionPage;
