import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../App.css";

const CustomNavbar = () => (
  <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Rick and Morty</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default CustomNavbar;
