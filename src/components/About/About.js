import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutH1,
  AboutP,
  TopLeft,
  BottomRight,
  AboutIMG,
} from "./AboutElements";
import "../../css/About.css";
import Snoopy_Peanuts from "../../Images/Snoopy_Peanuts.png";
import { useSpring, animated } from "react-spring";

const About = () => {
  return (
    <AboutContainer id="about">
      <TopLeft />
      <AboutContent>
        <AboutH1>
          About {<span style={{ color: "#fec89a" }}>Me</span>}.
          <AboutP>
            I like dogs. :DI like dogs. :DI like dogs. :DI like dogs. :D I like
            dogs. :DI like dogs. :DI like dogs. :DI like dogs. :D I like dogs.
            :DI like dogs. :DI like dogs. :DI like dogs. :D I like dogs. :DI
            like dogs. :DI like dogs. :DI like dogs. :D I like dogs. :DI like
            dogs. :DI like dogs. :DI like dogs. :D I like dogs. :DI like dogs.
            :DI like dogs. :DI like dogs. :D I like dogs. :DI like dogs. :DI
            like dogs. :DI like dogs. :D I like dogs. :DI like dogs. :DI like
            dogs. :DI like dogs. :D I like dogs. :DI like dogs. :DI like dogs.
            :DI like dogs. :D I like dogs. :DI like dogs. :DI like dogs. :DI
            like dogs. :D I like dogs. :DI like dogs. :DI like dogs. :DI like
            dogs. :D I like dogs. :DI like dogs. :DI like dogs. :DI like dogs.
            :D I like dogs. :DI like dogs. :DI like dogs. :DI like dogs.
          </AboutP>
        </AboutH1>
        <AboutIMG src={Snoopy_Peanuts} />
      </AboutContent>
      <BottomRight />
    </AboutContainer>
  );
};

export default About;
