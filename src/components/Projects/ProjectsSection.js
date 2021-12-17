import { ProjectsContainer, ProjectsCards } from "./ProjectsElements";
import pathFinderImg from "../../Images/pathfinder.png";
import homegrownImg from "../../Images/homegrown.png";
import Carousel from "react-bootstrap/Carousel";
import "../../css/ProjectsSection.css";

const ProjectsSection = () => {
  return (
    // <ProjectsContainer id="projects">
    //   {/* <ProjectsCards
    //     projectImage={pathFinderImg}
    //     projectLink={"https://ahien-pathfinder-project.netlify.app/"}
    //     projectName={"Visual Pathfinder Project"}
    //   />
    //   <ProjectsCards
    //     projectImage={pathFinderImg}
    //     projectLink={"https://ahien-pathfinder-project.netlify.app/"}
    //     projectName={"Visual Pathfinder Project"}
    //   /> */}
    // </ProjectsContainer>
    <div className="carouselContainer" id="projects">
      <h1 className="carouselTitle">Personal Projects</h1>
      <Carousel pause="hover" fade className="courselCSS">
        <Carousel.Item interval={5000}>
          <a
            href="https://ahien-pathfinder-project.netlify.app/"
            target="_blank"
          >
            <img
              className="d-block w-100"
              className="carouselItem"
              src={pathFinderImg}
              alt="First slide"
            />
          </a>
          <Carousel.Caption className="caption">
            <h3>Visual Pathfinder Project</h3>
            <p>
              Visual pathfinder that shows how conventional algorithms search.
            </p>
            <br />
            <br />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            className="carouselItem"
            src={homegrownImg}
            alt="Second slide"
          />
          <Carousel.Caption className="caption">
            <h3>Homegrown Project</h3>
            <p>
              BCIT practicum demo project. An online platform for bookstores to
              sell books during COVID-19 pandemic.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProjectsSection;
