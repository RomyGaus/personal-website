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
                        <p>
                            HTML5, CSS3, CSS Grid, Flexbox, DOM Manipulation, 
                            Javascript(including ES6/ES7/ES8/ES9/ES10/ES2020/ES2021/ES2022), 
                            Asynchronous JavaScript, HTTP/JSON/AJAX, React, Redux, React Hooks, Git + Github, Command Line,
                            Node.js, Express.js, NPM, RESTful API Design, PostgresSQL, SQL, Authentication, Authorization, Production and Deployment                            
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            Course Projects:
                        </p>
                        <p>
                            <a href="https://romygaus.github.io/FortuneCookie/" style={{textDecoration: "none", color: "black"}} target='_blank' rel='noreferrer'>Fortune Cookie</a>
                            <br></br>
                            <a href="https://romygaus.github.io/robofriends/" style={{textDecoration: "none", color: "black"}} target='_blank' rel='noreferrer'>Robofriends</a>
                            <br></br>
                            <a href="https://github.com/RomyGaus/background-generator" style={{textDecoration: "none", color: "black"}} target='_blank' rel='noreferrer'>Background-Generator</a>
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            Certificate:
                        </p>
                        <p>
                            <a href="https://github.com/RomyGaus/personal_website/blob/7a595de746a1b5250cc991875491558168983675/src/images/Certificate_ZTM.jpeg" style={{textDecoration: "none", color: "black"}} target='_blank' rel='noreferrer'>Certificate</a>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ZTM;
