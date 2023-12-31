import React from "react";
import GeneralInfoSection from "./components/GeneralInfoSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";

import './styles/styles.scss';

function App() {
  return (
    <>
      <header>
        <h1>Odin CV Project</h1>
      </header>

      <main>
        <GeneralInfoSection />
        <hr />
        <EducationSection />
        <hr />
        <ExperienceSection />
      </main>

      <Footer
        initialYear={2023}
        sourceCodeUrl="https://github.com/toddbrentlinger/odin-cv-project-v2"
      />
    </>
  );
}

export default App;
