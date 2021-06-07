import React, { useState } from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from "./SideBarElements";

const SideBar = ({ toggle, isOpen, setConditionalToggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onMouseLeave={setConditionalToggle}>
      <SidebarWrapper>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink
            onClick={toggle}
            to="home"
            smooth={true}
            offset={-80}
            duration={300}
          >
            Home
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="about"
            smooth={true}
            offset={-80}
            duration={300}
          >
            About
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="contact"
            smooth={true}
            offset={-80}
            duration={300}
          >
            Contact
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="projects"
            smooth={true}
            offset={-80}
            duration={300}
          >
            Projects
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
