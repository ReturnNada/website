import { Link } from "react-router";
import { Carousel, CarouselItem } from "react-bootstrap";
import "../../App.css";

import CASS0 from "../../assets/CASS0.png";

function ClassActionPage() {
  return (
    <>
      <h1 style={{ justifySelf: "center" }}>Class Action</h1>
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
      <Link to="/website/">Back</Link>
    </>
  );
}

export default ClassActionPage;
