import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component { 
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount () {
    var bodyDiv = document.getElementsByTagName("body")[0];
    window.scrollTo(0, bodyDiv.scrollHeight);
    window.history.scrollRestoration = 'manual';
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
        <div className='cliff'>
          <img alt='cliff' src={require('.//images/cliff.png')}/>
        </div>
      </div>
    )
  }
}

export default App;
