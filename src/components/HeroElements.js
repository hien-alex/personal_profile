import React from "react";
import styled, { css } from "styled-components/macro";

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
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 10%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;
  margin-left: 15vw;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-stop: 24px;
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
