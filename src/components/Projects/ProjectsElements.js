import styled, { css } from "styled-components/macro";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import "../../css/ProjectsSection.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

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
    maxHeight: "80%",
    maxWidth: "100%",
    alignSelf: "center",
  },
  header: {
    display: "grid",
    alignSelf: "start",
    justifySelf: "center",
    marginTop: "1rem",
    marginLeft: "2vw",
  },
});

export const ProjectsCards = ({ projectImage, projectLink, projectName }) => {
  const makeStyle = projectCardStyles();
  return (
    <CardActionArea component="a" href={projectLink} target="_blank">
      <Card className={makeStyle.root}>
        <CardHeader
          className={makeStyle.header}
          title={projectName}
        ></CardHeader>
        <hr />
        <CardMedia
          className={makeStyle.media}
          component="img"
          alt={projectName}
          image={projectImage}
          title={projectName}
          link={projectLink}
          target="_blank"
        />
      </Card>
    </CardActionArea>
  );
};
