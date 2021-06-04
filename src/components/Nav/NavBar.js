import "../../css/Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring";
import styled, { css } from "styled-components/macro";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavElements";

function MyNavBar({ toggle }) {
  // const fade = useSpring({
  //   config: { duration: 1000 },
  //   from: { opacity: 0 },
  //   opacity: 1,
  // });
  // const fade1 = useSpring({
  //   config: { duration: 1500 },
  //   from: { opacity: 0 },
  //   opacity: 1,
  // });
  // const fade2 = useSpring({
  //   config: { duration: 2000 },
  //   from: { opacity: 0 },
  //   opacity: 1,
  // });
  // const fade3 = useSpring({
  //   config: { duration: 2300 },
  //   from: { opacity: 0 },
  //   opacity: 1,
  // });

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Alex Hien</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="home"
                smooth={true}
                duration={350}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                activeClass="active"
                to="about"
                smooth={true}
                duration={350}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
          </NavMenu>
          <div />
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default MyNavBar;
