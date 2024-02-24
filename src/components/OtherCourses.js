import React, { Component } from "react";

class OtherCourses extends Component {
  render() {
    return (
      <div className="box work">
        <h2>Other Courses</h2>
        <ul>
          <li>
            <p className="date">Angular 17 for Juniors</p>
          </li>
          <li>
            <p className="date">Course Content:</p>
            <p>
              This comprehensive web development course covers HTML, CSS, and
              TypeScript basics, progresses to advanced Angular concepts with a
              hands-on project and offers expert guidance.
            </p>
          </li>
          <li>
            <p>
              <a
                href="https://github.com/RomyGaus/ngFlix"
                style={{ color: "black" }}
                target="_blank"
                rel="noreferrer"
              >
                Repository
              </a>
            </p>
            <p>
              <a
                href="https://github.com/RomyGaus/personal-website/blob/main/src/images/Certificate_Angularcourse_2024.pdf"
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

export default OtherCourses;
