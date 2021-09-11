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
import me from "../../Images/me.JPG";
import { useSpring, animated } from "react-spring";

const About = () => {
  return (
    <AboutContainer id="about">
      <TopLeft />
      <AboutContent>
        <AboutH1>
          About {<span style={{ color: "#fec89a" }}>Me</span>}.
          <AboutP className="aboutme-para">
            Hi I'm Alex!
            <br />
            <br />
            At this moment, I'm looking for entry / junior level oppurtunities
            in software development.
            <br />
            <br />
            I'm a recent graduate of BCITs Computer Science program, majoring in
            Computer Systems Technology. Much of my education was composed of
            software development courses such as object oriented programming,
            procedural programming, algorithms, and data structures. In those
            courses, I've gained a thorough understanding of languages such as
            Python, Java, and Javascript. However, I do have some experience in
            webdevelopment and databases, utilizing React, SQL, and R.
            <br />
            <br />
            As of now, my main focus is on expanding my abilities to apply
            algorithms and data structures to practical situations. I have
            created small projects utilizing web development with common
            algorithms but programming in Python is what I'm most familiar with.
            At this moment I'm excited to apply what I've learned and to find
            opportunities will teach me what it takes to be a software
            developer!
          </AboutP>
        </AboutH1>
        <AboutIMG src={me} />
      </AboutContent>
      <BottomRight />
    </AboutContainer>
  );
};

export default About;
