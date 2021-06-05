import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutH1,
  AboutP,
  TopLeft,
  BottomRight,
} from "./AboutElements";
import "../../css/About.css";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <TopLeft />
        <AboutH1>
          About Me.
          <AboutP>I like dogs. :D</AboutP>
        </AboutH1>
        <BottomRight />
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
