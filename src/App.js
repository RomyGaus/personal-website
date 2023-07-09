import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Content from './components/Content';
import './App.css';

const FallState = {
  HasFallen: 'HasFallen',
  HasNotFallen: 'HasNotFallen',
  IsFalling: 'IsFalling',
  Recovering: 'Recovering'
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
    var newScrollY = event.deltaY / 5 + this.state.scrollY
    // If climber is falling, allow falling animation to run
    if(this.state.fallState === FallState.IsFalling ) {
      return
    }

    // put boundaries on scrolling
    const ceiling = Math.min(newScrollY, this.state.maxScroll);
    newScrollY = Math.max(ceiling, 0);

    var newFallState = this.state.fallState;
    if(newScrollY > 1000 && this.state.fallState === FallState.HasNotFallen) {
      // Initiate Falling
      this.fallingClimber();
      newScrollY = 1000
      newFallState = FallState.IsFalling
    } else if(this.state.fallState === FallState.Recovering) {
      newScrollY = 0;
    }

    this.setState({
      scrollY: newScrollY,
      fallState: newFallState
    })
  }

  fallingClimber = () => {
    var containerDiv = document.getElementsByClassName("scrollContainer")[0];
    let animation = containerDiv.animate({bottom: 0}, 2000);
    animation.onfinish = event => {
      this.setState({
        scrollY: 0,
        fallState: FallState.Recovering
      })
    }
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

  continueScrolling = () => {
    this.setState({
      fallState: FallState.HasFallen
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
        {/* <div className='romy-bottom'>
          <img alt='climber' src={require('.//images/Romy.png')} />
        </div> */}
        <div className='scrollContainer' style={scrollStyle} onLoad={this.updateMaxDelta} >
          <div className='cliff'>
            <img alt='cliff' src={require('.//images/Wall Top.png')}/>
            <img alt='cliff' src={require('.//images/Wall 1.png')}/>
            <img alt='cliff' src={require('.//images/Wall 2.png')}/>
            <img alt='cliff' src={require('.//images/Wall 3.png')}/>
          </div>
          { this.state.fallState === FallState.Recovering
            ? <button type='button' className='btn' onClick={this.continueScrolling}>Continue</button>
            : <div></div>
          }
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
