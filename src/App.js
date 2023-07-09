import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Content from './components/Content';
import './App.css';

const FallState = {
  HasFallen: 'HasFallen',
  HasNotFallen: 'HasNotFallen',
  IsFalling: 'IsFalling'
}

class App extends Component { 
  constructor() {
    super()
    this.state = {
      scrollY: 0,
      maxScroll: 0,
      fallState: FallState.HasNotFallen
    }
  }

  componentDidMount () {
    window.history.scrollRestoration = 'manual';
    window.addEventListener("wheel", this.scrollHandler);
    window.addEventListener("DOMMouseScroll", this.scrollHandler);
  }

  scrollHandler = event => {
    var newScrollY = event.deltaY + this.state.scrollY
    // If is falling, go to the ground
    if(this.state.fallState === FallState.IsFalling){
      newScrollY = 0;
    }
    const ceiling = Math.min(newScrollY, this.state.maxScroll);
    newScrollY = Math.max(ceiling, 0);

    var newFallState = this.state.fallState;
    console.log(newScrollY)
    if(newScrollY > 1000 && this.state.fallState === FallState.HasNotFallen) {
      // Initiate Falling
      console.log('start falling');
      newFallState = FallState.IsFalling;
      newScrollY = 0;
    } else if(newScrollY === 0) {
      console.log('ground');
      // User is on the ground
      newFallState = FallState.HasFallen
    }

    this.setState({
      scrollY: newScrollY,
      fallState: newFallState
    })
  }

  createGrass = () => {
    let grass = [];

    let numberOfGrass = window.innerWidth/25;
    for (let i = 0; i < numberOfGrass; i++) {
      grass.push(<img alt='grass' src={require('.//images/grass.png')}/>)
    }
    return grass;
  }

  updateMaxDelta = () => {
    var containerDiv = document.getElementsByClassName("scrollContainer")[0];
    this.setState({
      maxScroll: containerDiv.scrollHeight - window.innerHeight
    })
  }
 
  render() {
    let scrollStyle = {
      bottom: `-${this.state.scrollY}px`
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
        <div className='scrollContainer' style={scrollStyle} onLoad={this.updateMaxDelta} >
          <div className='cliff'>
            <img alt='cliff' src={require('.//images/cliff.png')}/>
          </div>
          <div className='grass'>
            {this.createGrass()}
          </div>
          <Content></Content>
        </div>
      </div>
    )
  }
}

export default App;
