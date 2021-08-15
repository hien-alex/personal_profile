import NavSideBar from "./Nav/NavSideBar";
import HeroSection from "./Hero/HeroSection";
import About from "./About/About";
import ProjectsSection from "./Projects/ProjectsSection";
import ContactSection from "./Contact/ContactSection";

const Home = () => {
  return (
    <div className="App">
      <NavSideBar />
      <HeroSection />
      <About />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
