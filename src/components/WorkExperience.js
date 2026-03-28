import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
      <div className="box work">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <p className="date">
              01/2024 - present
              <br></br>
              comnovo GmbH
            </p>
            <p>
              Scrum Master
              <br></br>I work as a Scrum Master for two cross-functional
              development teams, where I facilitate Scrum events and support
              teams in becoming more self-organized and effective. I focus on
              improving collaboration, removing impediments, and driving
              continuous improvement through structured retrospectives and
              actionable follow-ups. With my background in development, I bridge
              the gap between technical teams and stakeholders and support a
              shared understanding of goals and delivery.
            </p>
            <p>
              Frontend Developer
              <br></br>
              Previously, I worked as a Frontend Developer building and
              maintaining Angular applications, with a strong focus on code
              quality, collaboration, and continuous improvement.
            </p>
          </li>
          <li>
            <p className="date">
              09/2019 - 12/2023
              <br></br>
              LINEG
              <br />
              (Left Lower Rhine Drainage Cooperative)
            </p>
            <p>
              Chemical Laboratory Technician
              <br></br>
              Maintained water quality according to DIN regulations by analyzing
              samples, organizing samples in a database, and heavily documenting
              official procedures.
            </p>
          </li>
          <li>
            <p className="date">
              07/2018 - 10/2018
              <br></br>
              QHP Pharma Analytics
            </p>
            <p>
              Chemical Laboratory Technician
              <br></br>
              Analyzed sensitive medical manufacturing samples with gas
              chromatography and documented processes according to GMP.
            </p>
          </li>
          <li>
            <p className="date">
              01/2017 - 06/2018
              <br></br>
              Ruhrverband
            </p>
            <p>
              Chemical Laboratory Technician
              <br></br>
              Successfully researched and presented polymers effective in
              separating sludge in sewage water.
            </p>
          </li>
          <li>
            <p className="date">
              07/2016 - 12/2016
              <br></br>
              Landesamt für Natur, Umwelt und Verbraucherschutz
              <br />
              (State Office for Nature, Environment and Consumer Protection)
            </p>
            <p>
              Chemical Laboratory Technician
              <br></br>
              Followed heavy metal concentrations in plants by sampling and
              analyzing various plant parts.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default WorkExperience;
