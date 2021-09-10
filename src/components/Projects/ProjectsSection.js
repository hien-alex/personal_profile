import { ProjectsContainer, ProjectsCards } from "./ProjectsElements";
import pathFinderImg from "../../Images/pathfinder.png";

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsCards
        projectImage={pathFinderImg}
        projectLink={"https://vigilant-noether-c11536.netlify.app/"}
        projectName={"Visual Pathfinder Project"}
      />
    </ProjectsContainer>
  );
};

export default ProjectsSection;
