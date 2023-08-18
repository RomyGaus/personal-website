import React, { Component } from 'react';

class Overview extends Component {
    render() {
        return(
            <div className='box overview'>
                <h2>Overview</h2>
                <ul>
                    <li>
                        <p>
                            Overview is an inventory management application, built to keep track of supplies. It's a full stack project built with React, Node.js and Express.js.
                            <br/><br/>
                            <span className='date'>Key Features:</span><br/><br/>
                            Effortless addition and deletion of items 
                            <br></br>
                            Modification of existing items
                            <br></br>
                            Automatic shopping list generator
                        </p>
                    </li>
                    <li>
                        <p className='date'>
                            Repositories:
                        </p>
                        <p> 
                            <a href="https://github.com/RomyGaus/overview-frontend" style={{color: "black"}} target='_blank' rel='noreferrer'>Frontend</a>
                            <br></br>
                            <a href="https://github.com/RomyGaus/overview-backend" style={{color: "black"}} target='_blank' rel='noreferrer'>Backend</a>
                        </p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Overview;