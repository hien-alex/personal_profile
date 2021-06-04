import styled, { css } from "styled-components/macro";
import { useSpring, animated } from "react-spring";

export const AboutContainer = styled.div`
  background: #white;
  justify-content: space-between;
  padding: 0 30px;
  height: 95vh;
  position: relative;
  z-index: 1;
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
