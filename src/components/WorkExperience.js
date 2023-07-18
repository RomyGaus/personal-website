import React, { Component } from 'react';

class WorkExperience extends Component {
    render() {
        return(
            <div className='box'>
                <h2>Work Experience</h2>
                <ul>
                    <li>
                        <p className='date'>
                            since 09/2019 
                            <br></br>
                            LINEG
                        </p>
                        <p>
                            Position: chemical laboratory technican
                            <br></br>
                            tasks: analyze water samples, quality management
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            08/2010 - 06/2012
                            <br></br>
                            Käthe-Kollwitz-Berufskolleg 
                        </p>
                        <p>
                            Graduation: Fachabitur im Bereich Gesundheit und Soziales (technical diploma in healthcare)
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default WorkExperience;
