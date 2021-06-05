import styled, { css } from "styled-components/macro";
import { useSpring, animated } from "react-spring";

export const AboutContainer = styled.div`
  background: #e5e5e5;
  justify-content: space-between;
  padding: 0 30px;
  height: 94vh;
  position: relative;
  z-index: 1;
  margin-top: 10px;
`;

export const AboutContent = styled.div`
  justify-content: center;
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  text-align: center;
  // display: flex;
  // flex-direction: row;
  align-items: center;
  display: inline;
  left: 7%;
  width: 90%;
  // margin-left: 6vw;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const AboutH1 = styled(animated.h1)`
  text-align: left;
  font-size: 48px;
  margin-top: 12vh;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 500px) {
    margin-top: 35vh;
    font-size: 32px;
  }
`;

export const AboutP = styled(animated.p)`
  text-align: left;
  font-size: 24;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TopLeft = styled(animated.div)`
  position: absolute;
  margin-top: -2vh;
  margin-left: -5vw;
  border-left: 10px solid black;
  border-top: 10px solid black;
  height: 50vh;
  width: 75vw;
  transition: 0.5s;
`;

export const BottomRight = styled(animated.div)`
  position: absolute;
  bottom: -40vh;
  right: 5vw;
  border-right: 10px solid black;
  border-bottom: 10px solid black;
  height: 60vh;
  width: 70vw;
  transition: 0.5s;

  @media screen and (min-height: 800px) {
    bottom: -50vh;
  }
`;
