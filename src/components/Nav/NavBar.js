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
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="https://github.com/hien-alex" target="_blank">
                Github
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                href="https://www.linkedin.com/in/alex-hien-496939213/"
                target="_blank"
              >
                LinkedIn
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* <span style={{ color: "#fec89a" }}>Alex</span> */}
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default MyNavBar;
