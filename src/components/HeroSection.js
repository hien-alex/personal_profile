import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
import background1 from "../Videos/background1.mp4";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={background1} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Hi, I'm Alex.
          <HeroP>details about my life....</HeroP>
        </HeroH1>
        <HeroH1>Hi, I'm Alex.</HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
