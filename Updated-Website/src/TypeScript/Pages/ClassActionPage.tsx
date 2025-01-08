import React from "react";
import { Link } from "react-router";
import { Carousel, CarouselItem } from "react-bootstrap";
import "../../App.css";

import CASS0 from "../../assets/CASS0.png";

function ClassActionPage() {
  return (
    <>
      <h1>Class Action</h1>
      <Carousel
        className="carousel slide"
        style={{
          alignSelf: "center",
        }}
      >
        <CarouselItem className="carousel-item">
          <img src={CASS0} className="carousel-img" />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <img src={CASS0} className="carousel-img" />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <img src={CASS0} className="carousel-img" />
        </CarouselItem>
      </Carousel>
      <Link to="/website/">Back</Link>
    </>
  );
}

export default ClassActionPage;
