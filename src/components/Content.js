import React, { Component } from "react";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import ZTM from "./ZTM";
import ZTMangular from "./ZTM-angular";
import ProjectCourse from "./ProjectCourse";
import Overview from "./Overview";
import LotLotR from "./LotLotR";
import OtherCourses from "./OtherCourses";

class Content extends Component {
  componentDidMount() {
    window.addEventListener("wheel", this.checkBoxes);
    window.addEventListener("DOMMouseScroll", this.checkBoxes);
    window.addEventListener("touchmove", this.checkBoxes);
  }

  checkBoxes = (event) => {
    const boxes = document.getElementsByClassName("box");
    const triggerTop = window.innerHeight / 2;

    for (const box of boxes) {
      const boxBottom = box.getBoundingClientRect().bottom;
      if (boxBottom > triggerTop) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    }
  };

  render() {
    return (
      <div className="content">
        <LotLotR></LotLotR>
        <Overview></Overview>
        <OtherCourses></OtherCourses>
        <ProjectCourse></ProjectCourse>
        <ZTMangular></ZTMangular>
        <ZTM></ZTM>
        <WorkExperience></WorkExperience>
        <Education></Education>
      </div>
    );
  }
}

export default Content;
