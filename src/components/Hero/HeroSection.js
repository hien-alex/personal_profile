import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroImg,
} from "./HeroElements";
import background1 from "../../Videos/background1.mp4";
import { useSpring, animated } from "react-spring";
import "../../css/heroSection.css";
import Snoopy_Peanuts from "../../Images/Snoopy_Peanuts.png";

const HeroSection = () => {
  const fade1 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0 },
    opacity: 1,
  });
  const fade2 = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0 },
    opacity: 1,
  });
  const fade3 = useSpring({
    config: { duration: 4000 },
    from: { opacity: 0 },
    opacity: 1,
  });
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={background1} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1 style={fade1} className="leftColumn">
          Hey, I'm {<span style={{ color: "#fec89a" }}>Alex</span>}.
          <HeroP style={fade2}>Full-Stack Dev - BCIT CST Program</HeroP>
        </HeroH1>

        {/* <HeroImg style={fade3} src={Snoopy_Peanuts} /> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
