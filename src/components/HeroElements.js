import React from "react";
import styled, { css } from "styled-components/macro";
import { useSpring, animated } from "react-spring";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  height: 90vh;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  justify-content: space-between;
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 10%;
  margin-top: 60px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const HeroH1 = styled(animated.h1)`
  font-size: 48px;
  text-align: left;
  margin-top: 10vh;

  color: #e5e5e5;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled(animated.p)`
  margin-stop: 24px;
  color: #e5e5e5;
  font-size: 22px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
