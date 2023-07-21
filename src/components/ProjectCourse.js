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
                            HTML, CSS & JavaScript
                            <br></br>                         
                            styling with flexbox, CSS animations & custom properties
                            <br></br>
                            DOM manipulation, events, array methods & HTTP requests
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            Course Projects:
                        </p>
                        <p> 
                            <a href="https://romygaus.github.io/50projects50days/" style={{textDecoration: "none", color: "black"}} target='_blank' rel='noreferrer'>50 Projects in 50 Days - Romy Gaus</a>
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            Certificate:
                        </p>
                        <p>
                            {/* <a href=".//images/Certificate_ZTM.jpeg" target='_blank' rel='noreferrer'>Certificate</a> */}
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ProjectCourse;