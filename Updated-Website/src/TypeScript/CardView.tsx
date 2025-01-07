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
      title: "Card 1",
      text: "This is the first card",
      imageUrl: "src/assets/CASS0.png",
    },
    {
      id: 2,
      title: "Card 2",
      text: "This is the second card",
      imageUrl: "path/to/image2.jpg",
    },
    {
      id: 3,
      title: "Card 3",
      text: "This is the third card",
      imageUrl: "path/to/image3.jpg",
    },
    {
      id: 4,
      title: "Card 4",
      text: "This is the fourth card",
      imageUrl: "path/to/image4.jpg",
    },
    {
      id: 5,
      title: "Card 5",
      text: "This is the fifth card",
      imageUrl: "path/to/image5.jpg",
    },
    {
      id: 6,
      title: "Card 6",
      text: "This is the sixth card",
      imageUrl: "path/to/image6.jpg",
    },
  ];

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {cardData.map((card) => (
          <Col key={card.id}>
            <Card>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Img src={card.imageUrl} />
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
