import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import CASS0 from "../assets/CASS0.png";
import Electrium from "../assets/Electrium.png";
import Sketchee from "../assets/Sketchee.png";
import Hitbox from "../assets/Hitbox.jpg";
import Night_Vision from "../assets/Night_Vision.jpg";
import Noise_Detector from "../assets/Noise_Detector.jpg";
import QIR from "../assets/QIR.png";
import Robot2 from "../assets/Robot2.png";

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
      title: "Class Action",
      text: "A character-based local multiplayer game",
      imageUrl: CASS0,
      link: "/website/CA/",
    },
    {
      id: 2,
      title: "Circuit Design",
      text: "My PCB designs",
      imageUrl: Electrium,
      link: "/website/PCBs/",
    },
    {
      id: 3,
      title: "Sketchee",
      text: "A productivity app for artists",
      imageUrl: Sketchee,
      link: "/website/Sketchee/",
    },
    {
      id: 4,
      title: "(s)HitBox",
      text: "Makeshift controller for fighting games",
      imageUrl: Hitbox,
      link: "/website/Hitbox/",
    },
    {
      id: 5,
      title: "Night Vision Goggles",
      text: "Uses an IR camera + Raspberry Pi",
      imageUrl: Night_Vision,
      link: "/website/NightVision/",
    },
    {
      id: 6,
      title: "Noise Detector",
      text: "Uses an STM32, LEDs, and I2C microphone",
      imageUrl: Noise_Detector,
      link: "/website/NoiseDetector/",
    },
    {
      id: 7,
      title: "QIR",
      text: "Ice-hockey inspired game",
      imageUrl: QIR,
      link: "/website/QIR/",
    },
    {
      id: 8,
      title: "Competition Robot",
      text: "For use in Lockheed Martin's E-Week",
      imageUrl: Robot2,
      link: "/website/Robot/",
    },
  ];

  return (
    <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
      <Row xs={1} md={2} lg={3} className="g-4">
        {cardData.map((card) => (
          <Col key={card.id}>
            <Link to={card.link} className="removeFormat">
              <Card className="hover-zoom">
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
