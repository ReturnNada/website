import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <hr />
            <Nav.Link href="/website/">Home</Nav.Link>
            <Nav.Link href="/website/21/">About</Nav.Link>
            <Nav.Link href="#services">Contact</Nav.Link>
            <Nav.Link href="#contact">Documents</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
