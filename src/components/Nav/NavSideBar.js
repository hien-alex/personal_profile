import React, { useState } from "react";
import Sidebar from "./SideBar";
import MyNavBar from "./NavBar";

const NavSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={setToggle} />
      <MyNavBar toggle={setToggle} />
    </>
  );
};

export default NavSideBar;
