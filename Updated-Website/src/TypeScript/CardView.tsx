import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

interface CardData {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
}

const CardView: React.FC = () => {
  const cardData: CardData[] = [
    {
      id: 1,
      title: "Class Action",
      text: "A character-based local multiplayer game",
      imageUrl: "./src/assets/CASS0.png",
    },
    {
      id: 2,
      title: "Circuit Design",
      text: "My PCB designs",
      imageUrl: "./src/assets/Electrium Anti-Spark V3.0 PCB.png",
    },
    {
      id: 3,
      title: "Sketchee",
      text: "A productivity app for artists",
      imageUrl: "./src/assets/Sketchee.PNG",
    },
    {
      id: 4,
      title: "(s)HitBox",
      text: "Makeshift controller for fighting games",
      imageUrl: "./src/assets/(s)Hitbox.jpg",
    },
    {
      id: 5,
      title: "Night Vision Goggles",
      text: "Uses an IR camera + Raspberry Pi",
      imageUrl: "./src/assets/Night Vision.jpg",
    },
    {
      id: 6,
      title: "Noise Detector",
      text: "Uses an STM32, LEDs, and I2C microphone",
      imageUrl: "./src/assets/Noise Detector.jpg",
    },
    {
      id: 7,
      title: "QIR",
      text: "Ice-hockey inspired game",
      imageUrl: "./src/assets/QIR.png",
    },
    {
      id: 8,
      title: "Competition Robot",
      text: "For use in Lockheed Martin's E-Week",
      imageUrl: "./src/assets/Robot2.png",
    },
  ];

  return (
    <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
      <Row xs={1} md={2} lg={3} className="g-4">
        {cardData.map((card) => (
          <Col key={card.id}>
            <Card className="hover-zoom">
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Img src={card.imageUrl} className="card-img" />
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardView;
