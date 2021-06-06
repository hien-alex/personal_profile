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
          <SidebarLink onClick={toggle} to="about">
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="contact">
            Contact
          </SidebarLink>
          <SidebarLink onClick={toggle} to="projects">
            Projects
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
