import "../css/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring";

function MyNavBar() {
  const fade = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0 },
    opacity: 1,
  });
  const fade1 = useSpring({
    config: { duration: 1500 },
    from: { opacity: 0 },
    opacity: 1,
  });
  const fade2 = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0 },
    opacity: 1,
  });
  const fade3 = useSpring({
    config: { duration: 2500 },
    from: { opacity: 0 },
    opacity: 1,
  });

  return (
    <Container className="p-0" fluid={true}>
      <Navbar className="border-bottom" expand="lg">
        <Navbar.Brand>
          <animated.div style={fade}>Alex Hien</animated.div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-toggle" className="border-0" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Link className="nav-link" to="/" style={fade}>
              <animated.div style={fade}>Home</animated.div>
            </Link>
            <Link className="nav-link" to="/projects">
              <animated.div style={fade1}>My Projects</animated.div>
            </Link>
            <Link className="nav-link" to="aboutme">
              <animated.div style={fade2}>About Me</animated.div>
            </Link>
            <Link className="nav-link" to="contact">
              <animated.div style={fade3}>Contact Me</animated.div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default MyNavBar;
