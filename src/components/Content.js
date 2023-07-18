import React, { Component } from 'react';
import Education from './Education';
import WorkExperience from './WorkExperience';
import ZTM from './ZTM';
import ProjectCourse from './ProjectCourse';

class Content extends Component {

    componentDidMount() {
        window.addEventListener('wheel', this.checkBoxes);
        window.addEventListener("DOMMouseScroll", this.checkBoxes);
    }

    checkBoxes = event => {
        const boxes = document.getElementsByClassName("box");
        const triggerTop = window.innerHeight / 2;

        for(const box of boxes){
            const boxBottom = box.getBoundingClientRect().bottom;
            if(boxBottom > triggerTop) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        }
    }
  
    render() {
        return(
            <div className='content'>
                <div className="box"><h2>other projects2</h2></div>
                <div className="box"><h2>other projects</h2></div>
                <ProjectCourse></ProjectCourse>
                <ZTM></ZTM>
                <WorkExperience></WorkExperience>
                <Education></Education>
            </div>
        )
    }
}

export default Content;