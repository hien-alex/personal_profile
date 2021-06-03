import React, { useState } from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from "./SideBarElements";

const SideBar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="contact">Contact</SidebarLink>
          <SidebarLink to="projects">Projects</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
