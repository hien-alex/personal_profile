import { ProjectsContainer, ProjectsCards } from "./ProjectsElements";
import pathFinderImg from "../../Images/pathfinder.png";
import meImg from "../../Images/me.JPG";
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

    <Carousel pause="hover" fade className="courselCSS">
      <Carousel.Item interval={5000}>
        <a href="https://ahien-pathfinder-project.netlify.app/" target="_blank">
          <img
            className="d-block w-100"
            className="carouselItem"
            src={pathFinderImg}
            alt="First slide"
          />
        </a>
        <Carousel.Caption className="caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          className="carouselItem"
          src={meImg}
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          className="carouselItem"
          src={pathFinderImg}
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProjectsSection;
