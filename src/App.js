import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Content from './components/Content';
import './App.css';

class App extends Component { 
  constructor() {
    super()
    this.state = {
      deltaY: 0,
      maxDelta: 0,
      hasFallen: false
    }
  }

  componentDidMount () {
    window.history.scrollRestoration = 'manual';
    window.addEventListener("wheel", this.scrollHandler);
    window.addEventListener("DOMMouseScroll", this.scrollHandler);
  }

  scrollHandler = event => {
    this.updateDeltaY(event);
  }

  updateDeltaY = event => {
    this.setState(state => {
      let newDeltaY = state.deltaY + event.deltaY;

      newDeltaY = Math.max(0, newDeltaY);
      newDeltaY = Math.min(this.state.maxDelta, newDeltaY);

      var newHasFallen = state.hasFallen;

      if(newDeltaY > 1000 && state.hasFallen === false) {
        newHasFallen = true;
        newDeltaY = 0;
      }

      return {
        deltaY: newDeltaY,
        hasFallen: newHasFallen
      }
    })
  }

  updateMaxDelta = () => {
    var containerDiv = document.getElementsByClassName("scrollContainer")[0];
    const maxDelta = containerDiv.scrollHeight - window.innerHeight;
    this.setState({
      maxDelta
    })
  }

  render() {
    let style_first = {
      transform: `translateY(-${this.state.maxDelta - this.state.deltaY}px)`
    };

    return (
      <div className='container'>
        <div className='header'>
          <h1>Romy Gaus</h1>
          <NavBar></NavBar>
        </div>
        <div className='climber'>
          <img alt='climber' src={require('.//images/climber.png')} />
        </div>
        <div className='scrollContainer' style={style_first} onLoad={this.updateMaxDelta} >
          <div className='cliff'>
            <img alt='cliff' src={require('.//images/cliff.png')}/>
          </div>
          <Content></Content>
        </div>
      </div>
    )
  }
}

export default App;
