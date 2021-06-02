import "../css/Nav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring";
import styled, { css } from "styled-components/macro";

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

  const Nav = styled.nav`
    height: 60px;
    background: #eacda3;
    background: -webkit-linear-gradient(to right, #d6ae7b, #eacda3);
    background: linear-gradient(to right, #d6ae7b, #eacda3);
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: sticky;
    width: 100%;
    top: 0;
  `;

  const NavLink = css`
    color: white;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      transform: translateY(-2px);
      color: white;
      text-decoration: none;
    }
  `;

  const Logo = styled(Link)`
    ${NavLink}
    padding: 0;
    font-style: italic;
  `;

  const MenuBars = styled.i``;

  const NavMenu = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
  `;

  const NavMenuLinks = styled(Link)`
    ${NavLink}
  `;

  const menuData = [
    { title: "Home", link: "/" },
    { title: "Contact", link: "/contact" },
    { title: "About", link: "/aboutme" },
    { title: "Projects", link: "/projects" },
  ];

  return (
    <Nav>
      {/* <Logo to="/">Alex Hien</Logo> */}
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <div />
    </Nav>
  );
}

export default MyNavBar;
