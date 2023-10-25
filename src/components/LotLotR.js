import React, { Component } from 'react';

class LotLotR extends Component {
    render() {
        return(
            <div className='box'>
                <h2>LotLotR</h2>
                <ul>
                    <li>
                        <p>   
                            LotLotR is a game where players have to fill out the blank space in a 'The Lord of the Rings' quote. This project is built with AngularJS and TypeScript.
                            <br/><br/>
                            <span className='date'>Key Features:</span><br/><br/>
                            Fetches quotes from an API 
                            <br></br>
                            Generates a random blank space in the quote
                            <br></br>
                            Displays the blank word with colors to indicate correctness
                        </p>
                    </li>
                    <li>
                        <p> 
                            <a href="https://github.com/RomyGaus/LotLotR" style={{color: "black"}} target='_blank' rel='noreferrer'>Repository</a>
                        </p>
                        <p> 
                            <a href="https://romygaus.github.io/LotLotR/" style={{color: "black"}} target='_blank' rel='noreferrer'>Website</a>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default LotLotR;