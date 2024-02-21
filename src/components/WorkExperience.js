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
              Frontend Developer
              <br></br>
              Frontend development with AngularJS.
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
