import React, { Component } from "react";

class ZTMangular extends Component {
  render() {
    return (
      <div className="box ztm">
        <h2>
          The Complete Angular Developer in 2023:
          <br></br>
          Zero to Mastery
        </h2>
        <ul>
          <li>
            <p className="date">Course Content:</p>
            <ul>
              <li>Bootstrapping Angular</li>
              <li>TypeScript</li>
              <li>Component Fundamentals</li>
              <li>Transforming Contant</li>
              <li>Component Design</li>
              <li>Reactive and Template Forms</li>
              <li>RXJS</li>
              <li>Authentication</li>
              <li>Costum Validators</li>
              <li>Routing</li>
            </ul>
          </li>
          <li>
            <p className="date">Repository</p>
            <p>
              <a
                href="https://github.com/RomyGaus/clips/"
                style={{ color: "black" }}
                target="_blank"
                rel="noreferrer"
              >
                clips
              </a>
            </p>
          </li>
          <li>
            <p className="date">Certificate:</p>
            <p>
              <a
                href="https://github.com/RomyGaus/personal-website/blob/main/src/images/Certificate-AngularCourse.jpeg"
                style={{ color: "black" }}
                target="_blank"
                rel="noreferrer"
              >
                Certificate
              </a>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ZTMangular;
