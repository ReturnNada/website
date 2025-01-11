import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    <Navbar bg="light" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="hover-zoom"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <hr />
            <Nav.Link className="hover-zoom" href="/website/">
              Home
            </Nav.Link>
            <Nav.Link className="hover-zoom" href="/website/About/">
              About
            </Nav.Link>
            <Nav.Link className="hover-zoom" href="/website/Projects/">
              Projects
            </Nav.Link>
            <Nav.Link className="hover-zoom" href="mailto:armaitus@gmail.com">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
