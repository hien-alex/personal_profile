import { useSpring, animated } from "react-spring";
import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.div`
  background: #e5e5e5;
  justify-content: space-between;
  padding: 0 30px;
  height: 94vh;
  position: relative;
  z-index: 1;
  margin-top: 10px;

  @media screen and (max-width: 500px) {
    height: 110vh;
  }
`;

export const AboutContent = styled.div`
  justify-content: center;
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  margin-top: 2vh;
  margin-bottom: 7vh;
  margin-left: -2vw;
  z-index: 10;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 500px) {
    font-size: 32px;
    margin-top: 5vh;
  }
`;

export const AboutP = styled(animated.p)`
  text-align: left;
  font-size: 22px;
  margin-top: 20px;
  width: 40vw;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 13px;
    width: 50vw;
  }
`;

export const frameFade = keyframes`{
  0% {
    opacity:0;
  }
  
  50% {
  opacity:100;
}}
`;

export const TopLeft = styled(animated.div)`
  position: absolute;
  margin-top: 5vh;
  margin-left: 2vw;
  border-left: 10px solid black;
  border-top: 10px solid black;
  height: 50vh;
  width: 75vw;
  transition: 0.5s;
  z-index: 1;
  animation-duration: 8s;
  animation-name: ${frameFade};
  animation-direction: alternate;
`;

export const BottomRight = styled(animated.div)`
  position: absolute;
  bottom: 10vh;
  right: 5vw;
  border-right: 10px solid black;
  border-bottom: 10px solid black;
  height: 60vh;
  width: 70vw;
  transition: 0.5s;
  z-index: 1;
  animation-duration: 8s;
  animation-name: ${frameFade};
  animation-direction: alternate;

  @media screen and (min-height: 800px) {
    bottom: 5vh;
  }
`;

export const AboutIMG = styled.img`
  height: 400px;
  width: 400px;
  margin-top: -150px;
  margin-left: 12vw;
  z-index: 10;

  @media screen and (min-width: 1500px) {
    margin-top: 250px;
  }

  @media screen and (max-width: 768px) {
    height: 250px;
    width: 250px;
  }

  @media screen and (max-width: 500px) {
    margin-top: 10px;
    height: 150px;
    width: 150px;
  }
`;
