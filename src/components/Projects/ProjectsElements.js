import styled, { css } from "styled-components/macro";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import "../../css/ProjectsSection.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Snoopy_Peanuts from "../../Images/Snoopy_Peanuts.png";
import background1 from "../../Videos/background1.mp4";

export const ProjectsContainer = styled.div`
  height: 90vh;
  width: 100%;
  background: black;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-row: span 2 / auto;
`;

const projectCardStyles = makeStyles({
  root: {
    height: "75vh",
    width: "40vw",
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    objectFit: "contain",
    maxHeight: "40%",
    maxWidth: "100%",
    alignSelf: "center",
  },
  header: {
    display: "grid",
    alignSelf: "start",
    justifySelf: "center",
    marginTop: "1rem",
  },
});

export const ProjectsCards = () => {
  const makeStyle = projectCardStyles();
  return (
    <CardActionArea>
      <Card className={makeStyle.root}>
        <CardHeader className={makeStyle.header} title="Project1"></CardHeader>
        <hr />
        <CardMedia
          className={makeStyle.media}
          component="img"
          alt="Project 1 Img."
          image={Snoopy_Peanuts}
          title="Project 1 Card"
        />
      </Card>
    </CardActionArea>
  );
};
