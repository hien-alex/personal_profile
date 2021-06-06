import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import styled, { css } from "styled-components/macro";

export const Nav = styled.nav`
  height: 80px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 960) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 0px;
  max-width: 100%;
`;

export const NavLogo = styled(Link)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin-left: 10px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: white;
    text-decoration: none;
  }
`;

export const MobileIcon = styled.div`
  top: 0;
  right: 0;
  transform: translate(100%, 20%);
  font-size: 1.8rem;
  cursor: pointer;
  color: white;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 90px;
  margin-top: 12px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.a`
  color: #e5e5e5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: white;
    text-decoration: none;
    border-bottom: 5px solid #fec89a;
    transition: 0.2s;
  }
`;
