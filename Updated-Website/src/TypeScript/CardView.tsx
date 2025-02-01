import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import CASS8 from "../assets/CASS8.png";
import Electrium from "../assets/Electrium.png";
import Sketchee from "../assets/Sketchee.png";
import Hitbox from "../assets/Hitbox.jpg";
import NV1 from "../assets/NV1.jpg";
import Noise_Detector from "../assets/Noise_Detector.jpg";
import QIR from "../assets/QIR.png";
import Robot2 from "../assets/Robot2.png";
import QuestionMark from "../assets/QuestionMark.jpg";

interface CardData {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
  link: string;
}

const CardView: React.FC = () => {
  const cardData: CardData[] = [
    {
      id: 1,
      title: "Circuit Design",
      text: "My PCB designs",
      imageUrl: Electrium,
      link: "/website/PCBs/",
    },
    {
      id: 2,
      title: "HitBox",
      text: "Makeshift controller for fighting games",
      imageUrl: Hitbox,
      link: "/website/Hitbox/",
    },
    {
      id: 3,
      title: "Night Vision Goggles",
      text: "Uses an IR camera + Raspberry Pi",
      imageUrl: NV1,
      link: "/website/NightVision/",
    },
    {
      id: 4,
      title: "Class Action",
      text: "A character-based local multiplayer game",
      imageUrl: CASS8,
      link: "/website/CA/",
    },
    {
      id: 5,
      title: "Competition Robot",
      text: "For use in Lockheed Martin's E-Week",
      imageUrl: Robot2,
      link: "/website/Robot/",
    },
    {
      id: 6,
      title: "Noise Detector",
      text: "Uses an STM32, LEDs, and I2C microphone",
      imageUrl: Noise_Detector,
      link: "https://github.com/ReturnNada/Library-Sound-Monitor",
    },
    {
      id: 7,
      title: "QIR (WIP)",
      text: "Air-hockey inspired game",
      imageUrl: QIR,
      link: "https://github.com/Sleepwalker-Studios/QIR",
    },
    {
      id: 8,
      title: "Sketchee (WIP)",
      text: "A productivity app for artists",
      imageUrl: Sketchee,
      link: "https://github.com/ReturnNada/Sketchee",
    },
    {
      id: 9,
      title: "What's Next?",
      text: "Future plans and project ideas",
      imageUrl: QuestionMark,
      link: "/website/WhatNext/",
    },
  ];

  return (
    <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
      <Row xs={1} md={2} lg={3} className="g-4">
        {cardData.map((card) => (
          <Col key={card.id}>
            <Link
              to={card.link}
              target={
                card.id === 8 || card.id === 7 || card.id === 6
                  ? "_blank"
                  : "_self"
              }
              className="removeFormat"
            >
              <Card className="hover-zoom cardAnim">
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Img src={card.imageUrl} className="card-img" />
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardView;
