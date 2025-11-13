import React from "react";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";
import WorkExperience from "./components/WorkExperience";
import OfferServices from "./components/OfferServices";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Skills />
      <FeaturedProjects />
      <WorkExperience />
      <OfferServices />
      <Certifications />
      <Contact />
    </div>
  );
};

export default App;
