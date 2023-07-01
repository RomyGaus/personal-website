import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1>Romy Gaus</h1>
          <NavBar></NavBar>
        </div>
        <div className='climber'>
          <img alt='climber' src={require('.//images/climber.png')} />
        </div>
      </div>
    )
  }
}

export default App;
