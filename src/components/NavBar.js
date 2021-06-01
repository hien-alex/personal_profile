import "../css/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function MyNavBar() {
  const style = {
    color: "white",
  };
  return (
    <Container className="p-0" fluid={true}>
      <Navbar className="border-bottom" expand="lg">
        <Navbar.Brand>Alex Hien</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/projects">
              My Projects
            </Link>
            <Link className="nav-link" to="aboutme">
              About Me
            </Link>
            <Link className="nav-link" to="contact">
              Contact Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default MyNavBar;
