import React, { Component } from 'react';

class ZTM extends Component {
    render() {
        return(
            <div className='box ztm'>
                <h2>The Complete Web Developer in 2023:
                    <br></br>
                    Zero to Mastery
                </h2>
                <ul>
                    <li>
                        <p className='date'>
                            Course Content:
                        </p>
                        <ul>
                            <li>HTML5, CSS3 (including CSS Grid and Flexbox)</li>
                            <li>DOM Manipulation</li>
                            <li>JavaScript (spanning various ECMAScript versions)</li>
                            <li>Asynchronous JavaScript + HTTP/JSON/AJAX</li>
                            <li>React (including Redux and React Hooks)</li>
                            <li>Git + Github</li>
                            <li>Command Line proficiency</li>
                            <li>Node.js + Express.js</li>
                            <li>RESTful API Design</li>
                            <li>NPM usage</li>
                            <li>SQL + PostgresSQL</li>
                            <li>Authentication and Authorization implementation</li>
                            <li>Production and Deployment process</li>               
                        </ul>
                    </li>
                    <li>
                        <p className='date'>
                            Course Projects:
                        </p>
                        <p>
                            <a href="https://romygaus.github.io/FortuneCookie/" style={{color: "black"}} target='_blank' rel='noreferrer'>Fortune Cookie</a>
                            <br></br>
                            <a href="https://romygaus.github.io/robofriends/" style={{color: "black"}} target='_blank' rel='noreferrer'>Robofriends</a>
                            <br></br>
                            <a href="https://github.com/RomyGaus/background-generator" style={{color: "black"}} target='_blank' rel='noreferrer'>Background-Generator</a>
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            Certificate:
                        </p>
                        <p>
                            <a href="https://github.com/RomyGaus/personal_website/blob/7a595de746a1b5250cc991875491558168983675/src/images/Certificate_ZTM.jpeg" style={{color: "black"}} target='_blank' rel='noreferrer'>Certificate</a>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ZTM;
