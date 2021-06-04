import React from "react";
import { AboutContainer, AboutContent, AboutH1, AboutP } from "./AboutElements";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutH1>
          About Me.
          <AboutP>I like dogs. :D</AboutP>
        </AboutH1>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
