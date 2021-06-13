import styled from "styled-components";

export const ContactBackground = styled.div`
  height: 90vh;
  top: 0;
  width: 100%;
  background: grey;
  position: absolute;
`;

export const ContactContainer = styled.div`
  background: black;
  position: relative;
  // z-index: 1;
`;

export const ContactContent = styled.div`
  justify-content: center;
  text-align: center;
  position: absolute;
  display: inline;
  flex-direction: row;
  align-items: center;
  width: 90%;
  left: 5%;
`;
