import { ProjectsContainer, ProjectsCards } from "./ProjectsElements";
import pathFinderImg from "../../Images/pathfinder.png";
import homegrownImg from "../../Images/homegrown.png";
import Carousel from "react-bootstrap/Carousel";
import todoList from "../../Images/todoList.png";
import restaurantReviews from "../../Images/restaurants-review.png";
import "../../css/ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <div className="carouselContainer" id="projects">
      <h1 className="carouselTitle">Personal Projects</h1>
      <Carousel pause="hover" fade className="courselCSS">
        <Carousel.Item interval={5000}>
          <a
            href="https://ahien-restaurant-reviews-project.netlify.app/"
            target="_blank"
          >
            <img
              className="d-block w-100"
              className="carouselItem"
              src={restaurantReviews}
              alt="First slide"
            />
          </a>
          <Carousel.Caption className="caption">
            <h3>Restaurants Review Project</h3>
            <p>
              Full stack project utilizing the MERN stack. Created API for users
              to perform CRUD operations, allows users to create,
              <br /> read, update, and delete reviews. Client side hosted on
              netlify and server side hosted on heroku.
            </p>
            <br />
            <br />
          </Carousel.Caption>
        </Carousel.Item>
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
              Visual pathfinder to demonstrate how algorithms search from node
              to node. Algorithms include DFS, BFS, Dijkstra's, A*.
            </p>
            <br />
            <br />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <a href="https://homegrown-bc.herokuapp.com/" target="_blank">
            <img
              className="d-block w-100"
              className="carouselItem"
              src={homegrownImg}
              alt="Second slide"
            />
          </a>
          <Carousel.Caption className="caption">
            <h3>Homegrown Project</h3>
            <p>
              BCIT practicum demo project. An online platform for bookstores to
              sell books during COVID-19 pandemic.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <a href="https://ahien-todolist-project.netlify.app/" target="_blank">
            <img
              className="d-block w-100"
              className="carouselItem"
              src={todoList}
              alt="Second slide"
            />
          </a>
          <Carousel.Caption className="caption">
            <h3>Task List Project</h3>
            <p>
              Personal task list project. Front-end developed using React,
              JavaScript, and CSS. Tasks stored in localStorage.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProjectsSection;
