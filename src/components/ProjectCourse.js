import React, { Component } from 'react';

class ProjectCourse extends Component {
    render() {
        return(
            <div className='box project-course'>
                <h2>50 Projects in 50 Days</h2>
                <ul>
                    <li>
                        <p className='date'>
                            Course Content:
                        </p>
                        <p>
                            A deep dive into HTML, CSS, and JavaScript without relying on any frameworks. Improved my understanding of Flexbox, CSS animations, DOM manipulation and other web development concepts.
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            Course Projects:
                        </p>
                        <p> 
                            <a href="https://romygaus.github.io/50projects50days/" style={{color: "black"}} target='_blank' rel='noreferrer'>50 Projects in 50 Days - Romy Gaus</a>
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            Certificate:
                        </p>
                        <p>
                            <a href="https://github.com/RomyGaus/personal_website/blob/7a595de746a1b5250cc991875491558168983675/src/images/Certificate%2050ProjectsIn50Days.jpeg" style={{color: "black"}} target='_blank' rel='noreferrer'>Certificate</a>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ProjectCourse;