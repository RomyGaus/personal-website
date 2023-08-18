import React, { Component } from 'react';

class Education extends Component {
    render() {
        return(
            <div className='box education'>
                <h2>School and Apprenticeship</h2>
                <ul>
                    <li>
                        <p className='date'>
                            09/2013 - 07/2016
                            <br></br>
                            Landesamt für Natur, Umwelt und Verbraucherschutz<br/>
                            (State Office for Nature, Environment and Consumer Protection)
                        </p>
                        <p>
                            Apprenticeship as a Chemical Laboratory Technican
                            <br></br>
                            Final score school: 1.8
                            <br></br>
                            Final score: 91/100 points
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            08/2010 - 06/2012
                            <br></br>
                            Käthe-Kollwitz-Berufskolleg<br/>
                            (Vocational School)
                        </p>
                        <p>
                            Fachabitur im Bereich Gesundheit und Soziales<br/>
                            (Technical Diploma in Healthcare)
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Education;
