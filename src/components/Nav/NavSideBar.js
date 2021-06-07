import React, { useState } from "react";
import Sidebar from "./SideBar";
import MyNavBar from "./NavBar";

const NavSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setToggle = () => {
    setIsOpen(!isOpen);
  };

  const setConditionalToggle = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={setToggle}
        setConditionalToggle={setConditionalToggle}
      />
      <MyNavBar toggle={setToggle} />
    </>
  );
};

export default NavSideBar;
