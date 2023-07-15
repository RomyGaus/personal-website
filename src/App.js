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
      fallState: FallState.HasNotFallen,
      cliffTop: 0,
      climberTop: 0
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
    if(newScrollY > 700 && this.state.fallState === FallState.HasNotFallen) {
      // Initiate Falling
      this.fallingClimber();
      newScrollY = 700
      newFallState = FallState.IsFalling
    } else if(this.state.fallState === FallState.Recovering) {
      newScrollY = 0;
    }

    this.updateClimberTop();

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
    });
    this.updateClimberTop();
  }

  setCliffTop = () => {
    var cliffTopEl = document.getElementsByClassName("cliffTop")[0];
    this.setState({
      cliffTop: cliffTopEl.scrollHeight / 2
    });
  }

  updateClimberTop = () => {
    let newCliffOffset = this.state.cliffTop - (this.state.maxScroll - this.state.scrollY);
    let defaultTop = window.innerHeight / 2;

    const newClimberTop = Math.max(newCliffOffset, defaultTop);

    this.setState({
      climberTop: newClimberTop
    });
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

    let climberImgSrc = require('.//images/Miles falling.png');
    if(this.state.fallState !== FallState.IsFalling) {
      const multiple = 100;
      const scrollOffset = this.state.scrollY;
      const floorMultiple = Math.floor(scrollOffset/multiple);
      if( floorMultiple * multiple % (multiple * 2) === 0) {
        climberImgSrc = require('.//images/Miles Climbing left hand.png')
      } else {
        climberImgSrc = require('.//images/Miles Climbing right hand.png')
      }
    }

    let climberTopStyle = {
      top: `${this.state.climberTop}px`
    };    

    let romyTopStyle = {
      top: `${this.state.cliffTop - window.innerHeight * 0.35}px`
    }

    return (
      <div className='container'>
        <div className='header'>
          <h1>Romy Gaus</h1>
          <NavBar></NavBar>
        </div>
        <div className='climber' style={climberTopStyle}>
          <img alt='climber' src={climberImgSrc} />
        </div>
        <div className='scrollContainer' style={scrollStyle} onLoad={this.updateMaxDelta} >
          <div className='romy-top' style={romyTopStyle}>
            <img alt='romy with flag' src={require('.//images/Romy Flag.png')} />
          </div>
          <div className='birds-left'>
            <img alt='birds' src={require('.//images/Birds.png')} />
          </div>
          <div className='birds-right'>
            <img alt='birds' src={require('.//images/Birds.png')} />
          </div>
          <div className='balloon'>
            <img alt='balloon' src={require('.//images/Balloon.png')} />
          </div>
          <div className='cliff'>
            <img className='cliffTop' alt='cliff' src={require('.//images/Wall Top.png')} onLoad={this.setCliffTop}/>
            <img alt='cliff' src={require('.//images/Wall 1.png')}/>
            <img alt='cliff' src={require('.//images/Wall 2.png')}/>
            <img alt='cliff' src={require('.//images/Wall 3.png')}/>
            <img alt='cliff' src={require('.//images/Wall 1.png')}/>
            <img alt='cliff' src={require('.//images/Wall 3.png')}/>
            <img alt='cliff' src={require('.//images/Wall 2.png')}/>
            <img alt='cliff' src={require('.//images/Wall 3.png')}/>
          </div>
          { this.state.fallState === FallState.Recovering
            ? <button type='button' className='btn' onClick={this.continueScrolling}>Continue</button>
            : <div></div>
          }
          <div className='romy-bottom'>
            <img alt='romy' src={require('.//images/Romy.png')} />
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
