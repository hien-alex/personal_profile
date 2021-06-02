import "../css/Nav.css";
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

function MyNavBar() {
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

  const menuData = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "/contact" },
    { title: "About", link: "/aboutme" },
    { title: "Projects", link: "/projects" },
  ];

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Alex Hien</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default MyNavBar;
