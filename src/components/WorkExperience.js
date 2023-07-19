import React, { Component } from 'react';

class WorkExperience extends Component {
    render() {
        return(
            <div className='box work'>
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
                            tasks: analyze water samples, quality management, registration of samples and results in a database
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            07/2018 - 10/2018
                            <br></br>
                            QHP Pharma Analytics
                        </p>
                        <p>
                            Position: chemical laboratory technican
                            <br></br>
                            tasks: GMP Documentation, analyze samples with gas chromatography
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            01/2017 - 06/2018
                            <br></br>
                            Ruhrverband
                        </p>
                        <p>
                            Position: chemical laboratory technican
                            <br></br>
                            tasks: registration of samples and results in a database, sampling of water samples 
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            07/2016 - 12/2016
                            <br></br>
                            Landesamt für Natur,Umwelt und Verbraucherschutz
                        </p>
                        <p>
                            Position: chemical laboratory technican
                            <br></br>
                            tasks: registration of results in a database, ICP-OES, TN
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default WorkExperience;
