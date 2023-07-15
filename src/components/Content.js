import React, { Component } from 'react';
import Education from './Education';

class Content extends Component {

    componentDidMount() {
        window.addEventListener('wheel', this.checkBoxes);
        window.addEventListener("DOMMouseScroll", this.checkBoxes);
    }

    checkBoxes = event => {
        const boxes = document.getElementsByClassName("box");
        const triggerTop = window.innerHeight / 6;

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
                <div className="box"><h2>other projects</h2></div>
                <div className="box"><h2>50 Days 50 Projects</h2></div>
                <div className="box"><h2>ZTM Course</h2></div>
                <div className="box"><h2>Chemielaborantin Jobs</h2></div>
                <Education></Education>
            </div>
        )
    }
}

export default Content;