import React from "react";
import Work from "./work/Work";
import Education from "./education/Education";
import "./experience-education.css";

const ExperienceEducation = () => {
  return (
    <section id="experience-education">
      <h5>&nbsp;</h5>
      <h2>Experience & Education</h2>

      <div className="container experience-education__container">
        <div className="experience-education__grid">
          <div className="experience-education__column">
            <Work />
          </div>
          <div className="experience-education__column">
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
