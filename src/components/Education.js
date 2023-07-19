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
                            Landesamt für Natur,Umwelt und Verbraucherschutz
                        </p>
                        <p>
                            Apprenticeship as a chemical laboratory technican
                            <br></br>
                            Final score school: ø 1.8
                            <br></br>
                            Final score: 91/100 points
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

export default Education;
