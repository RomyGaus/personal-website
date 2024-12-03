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
        <ul>
          <li>
            <p className="date">Angular Testing</p>
          </li>
          <li>
            <p className="date">Course Content:</p>
            <p>
              This angular testing course covers unit testing, E2E testing, and
              advanced concepts like mocking, spying, and NgRx testing. Gained
              hands-on experience with Jest, Cypress, and full project testing
              to confidently handle testing in real-world Angular projects.
            </p>
          </li>
          <li>
            <a
              href="https://github.com/RomyGaus/personal-website/blob/main/src/images/Certificate_Angular_Testing_Course.pdf"
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
            >
              Certificate
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <p className="date">Angular University</p>
          </li>
          <li>
            <p className="date">Courses</p>
            <p>
              I completed multiple in-depth courses including Angular Deep Dive,
              Angular Forms in Depth, Angular Router in Depth, NgRx: The
              Complete Guide, and RxJS in Practice. I gained advanced knowledge
              of Angular core concepts, state management with NgRx, reactive
              programming with RxJS, and efficient implementation of forms and
              routing in Angular applications. These courses have strengthened
              my expertise in building robust, scalable, and high-performance
              Angular applications.
            </p>
          </li>
          <li>
            <a
              href="https://github.com/RomyGaus/personal-website/blob/main/src/images/Certificate_AngularUniversity_DeepDiveCourse.pdf"
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
            >
              Certificate Angular Deep Dive
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RomyGaus/personal-website/blob/main/src/images/Certificate_AngularRouter_Course.pdf"
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
            >
              Certificate Router In Depth
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RomyGaus/personal-website/blob/main/src/images/Certificate_AngularForms_Course.pdf"
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
            >
              Certificate Forms In Depth
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RomyGaus/personal-website/blob/main/src/images/Certificate_RxJS_Course.pdf"
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
            >
              Certificate RxJS in Practice
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RomyGaus/personal-website/blob/main/src/images/Certificate_NgRx_Course.pdf"
              style={{ color: "black" }}
              target="_blank"
              rel="noreferrer"
            >
              Certificate NgRx-The complete Guide
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default OtherCourses;
