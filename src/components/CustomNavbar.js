import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const CustomNavbar = () => (
  <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Rick and Morty</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default CustomNavbar;
