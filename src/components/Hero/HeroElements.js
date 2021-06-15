import React from "react";
import styled, { css } from "styled-components/macro";
import { useSpring, animated } from "react-spring";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  top: 0;
  // display: flex;
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
  height: 110%;
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
  justify-content: center;
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  text-align: center;
  flex-direction: row;
  align-items: center;
  display: inline;
  left: 5%;
  width: 90%;
  // margin-left: 6vw;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const HeroH1 = styled(animated.h1)`
  font-size: 48px;
  text-align: center;
  width: 100%;
  margin-top: 20vh;

  color: #e5e5e5;
  @media screen and (max-width: 768px) {
    margin-top: 35vh;
    font-size: 40px;
  }

  @media screen and (max-width: 500px) {
    margin-top: 35vh;
    font-size: 32px;
  }
`;

export const HeroP = styled(animated.p)`
  margin-stop: 24px;
  color: #e5e5e5;
  font-size: 22px;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HeroImg = styled.img`
  height: 400px;
  width: 400px;
  margin-top: 10vh;
  margin-left: -120px;

  @media screen and (max-width: 768px) {
    height: 250px;
    width: 250px;
  }

  @media screen and (max-width: 500px) {
    height: 150px;
    width: 150px;
  }
`;
