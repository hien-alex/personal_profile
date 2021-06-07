import styled, { keyframes } from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 9999;
  width: 15%;
  height: 100%;
  background: #ffff;
  display: grid;
  align-items: center;
  justify-content: center;
  transition: 0.25s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: black;
`;

export const Icon = styled.div`
  margin-top: -10rem;
  align-items: center;
  right: 5rem;
  background: #ffff;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  &:hover {
    transition: 0.3s;
    transform: translateY(-4px);
    transform: rotate(90deg);
  }
`;

export const SidebarWrapper = styled.div`
  color: white;
  margin-top: 5rem;
  align-items: center;
  display: grid;
  justify-content: center;
`;

const HoverLink = keyframes`  {
  0% {
    transform: scale(0.999, 0.999) translate3d(0px, 0px, 1px);
    animation-timing-function:ease-in-out
}

50% {
    transform: scale(0.999, 0.999) translate3d(0px, 12px, 1px);
    animation-timing-function:ease-in-out
}

}`;

export const SidebarLink = styled(LinkS)`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: #fec89a;
    text-decoration: none;
    transition: 0.5s;
    animation-duration: 0.8s;
    animation-name: ${HoverLink};
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  margin-left: -2.5rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
