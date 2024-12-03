import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import "./App.css";

const FallState = {
  HasFallen: "HasFallen",
  HasNotFallen: "HasNotFallen",
  IsFalling: "IsFalling",
  Recovering: "Recovering",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
      touchY: 0,
      maxScroll: 0,
      fallState: FallState.HasNotFallen,
      cliffTop: 0,
      climberTop: 0,
    };
  }

  componentDidMount() {
    window.history.scrollRestoration = "manual";
    window.addEventListener("wheel", this.scrollHandler);
    window.addEventListener("DOMMouseScroll", this.scrollHandler);
    window.addEventListener("touchstart", this.touchStartHandler);
    window.addEventListener("touchmove", this.touchMoveHandler);
  }

  scrollHandler = (event) => {
    var newScrollY = event.deltaY / 5 + this.state.scrollY;
    // If climber is falling, allow falling animation to run
    if (this.state.fallState === FallState.IsFalling) {
      return;
    }

    // put boundaries on scrolling
    const ceiling = Math.min(newScrollY, this.state.maxScroll);
    newScrollY = Math.max(ceiling, 0);

    var newFallState = this.state.fallState;
    if (newScrollY > 500 && this.state.fallState === FallState.HasNotFallen) {
      // Initiate Falling
      this.fallingClimber();
      newScrollY = 500;
      newFallState = FallState.IsFalling;
    } else if (this.state.fallState === FallState.Recovering) {
      newScrollY = 0;
    }

    this.updateClimberTop();

    this.setState({
      scrollY: newScrollY,
      fallState: newFallState,
    });
  };

  touchStartHandler = (event) => {
    this.setState({
      touchY: event.changedTouches[0].screenY,
    });
  };

  touchMoveHandler = (event) => {
    const scrolledDistance =
      (event.changedTouches[0].screenY - this.state.touchY) * -1;
    this.setState({
      touchY: this.state.touchY,
    });
    this.scrollHandler({
      deltaY: scrolledDistance,
    });
  };

  fallingClimber = () => {
    var containerDiv = document.getElementsByClassName("scrollContainer")[0];
    let animation = containerDiv.animate({ bottom: 0 }, 2000);
    animation.onfinish = (event) => {
      this.setState({
        scrollY: 0,
        fallState: FallState.Recovering,
      });
    };

    var ropeDiv = document.getElementsByClassName("rope")[0];
    ropeDiv.animate({ bottom: `${window.innerHeight * 0.32}px` }, 2000);
  };

  createGrass = () => {
    let grass = [];

    let numberOfGrass = window.innerWidth / 25;
    for (let i = 0; i < numberOfGrass; i++) {
      grass.push(<img alt="grass" src={require(".//images/grass.png")} />);
    }
    return grass;
  };

  updateMaxDelta = () => {
    var containerDiv = document.getElementsByClassName("scrollContainer")[0];
    this.setState({
      maxScroll: containerDiv.scrollHeight - window.innerHeight,
    });
    this.updateClimberTop();
  };

  setCliffTop = () => {
    var cliffTopEl = document.getElementsByClassName("cliffTop")[0];
    this.setState({
      cliffTop: cliffTopEl.scrollHeight / 2,
    });
  };

  updateClimberTop = () => {
    let newCliffOffset =
      this.state.cliffTop - (this.state.maxScroll - this.state.scrollY);
    let defaultTop = window.innerHeight / 2;

    const newClimberTop = Math.max(newCliffOffset, defaultTop);

    this.setState({
      climberTop: newClimberTop,
    });
  };

  continueScrolling = () => {
    this.setState({
      fallState: FallState.HasFallen,
    });
  };

  render() {
    let scrollStyle = {
      bottom: `-${this.state.scrollY}px`,
    };

    let climberImgSrc = require(".//images/Miles falling.png");
    if (this.state.fallState !== FallState.IsFalling) {
      const multiple = 100;
      const scrollOffset = this.state.scrollY;
      const floor = Math.floor(scrollOffset / multiple);
      const moduloResult = floor % 4;
      if (moduloResult === 0) {
        climberImgSrc = require(".//images/climber1.png");
      } else if (moduloResult === 1) {
        climberImgSrc = require(".//images/climber2.png");
      } else if (moduloResult === 2) {
        climberImgSrc = require(".//images/climber3.png");
      } else {
        climberImgSrc = require(".//images/climber4.png");
      }
    }

    let climberTopStyle = {
      top: `${this.state.climberTop}px`,
    };

    let romyTopStyle = {
      top: `${this.state.cliffTop - window.innerHeight * 0.35}px`,
    };

    let ropeStyle = {
      top: `${this.state.cliffTop}px`,
      bottom: `${this.state.scrollY + window.innerHeight * 0.32}px`,
    };

    let romyBottomRect = document.getElementsByClassName("romy-bottom")[0];
    let romyBottomLeft =
      romyBottomRect === undefined
        ? window.innerWidth * 0.05
        : romyBottomRect.getBoundingClientRect().left;
    let left = romyBottomLeft + window.innerHeight * 0.175;
    let bottom = window.innerHeight * 0.175 - 5;
    let opposite = window.innerWidth * 0.4 - left;
    let adjacent =
      this.state.maxScroll - bottom + window.innerHeight - this.state.cliffTop;
    let angle = Math.tan(opposite / adjacent);
    let belayRopeStyle = {
      transform: `rotate(${angle}rad)`,
      left: `${left + opposite / 2}px`,
      height: `${adjacent}px`,
      bottom: `${bottom}px`,
    };

    return (
      <div className="container">
        <div className="header">
          <h1>Romy Gaus</h1>
          <NavBar></NavBar>
        </div>
        <div className="footer">
          <NavBar></NavBar>
        </div>
        <div className="climber" style={climberTopStyle}>
          <img alt="climber" src={climberImgSrc} />
        </div>
        <div
          className="scrollContainer"
          style={scrollStyle}
          onLoad={this.updateMaxDelta}
        >
          <div className="stars">
            <img alt="stars" src={require(".//images/virgo.png")} />
          </div>
          <div className="moon">
            <img alt="moon" src={require(".//images/moon.png")} />
          </div>
          <div className="romy-top" style={romyTopStyle}>
            <img
              alt="romy with flag"
              src={require(".//images/Romy Flag.png")}
            />
          </div>
          {this.state.scrollY > 3700 - window.innerHeight / 2 ? (
            <div className="birds-left">
              <img alt="birds" src={require(".//images/Birds.png")} />
            </div>
          ) : (
            <div></div>
          )}
          {this.state.scrollY > 2000 - window.innerHeight / 2 ? (
            <div className="birds-right">
              <img alt="birds" src={require(".//images/Birds.png")} />
            </div>
          ) : (
            <div></div>
          )}
          {this.state.scrollY > 2200 - window.innerHeight / 2 ? (
            <div className="balloon">
              <img alt="balloon" src={require(".//images/Balloon.png")} />
            </div>
          ) : (
            <div></div>
          )}
          {this.state.scrollY > 2600 - window.innerHeight / 2 ? (
            <div className="clouds">
              <img alt="clouds" src={require(".//images/clouds.png")} />
            </div>
          ) : (
            <div></div>
          )}
          {this.state.scrollY > 4500 - window.innerHeight / 2 ? (
            <div className="clouds-left">
              <img alt="clouds" src={require(".//images/clouds.png")} />
            </div>
          ) : (
            <div></div>
          )}
          {this.state.scrollY > 5000 - window.innerHeight / 2 ? (
            <div className="clouds-left-2">
              <img alt="clouds" src={require(".//images/clouds.png")} />
            </div>
          ) : (
            <div></div>
          )}
          <div
            className={`spaceship ${
              this.state.scrollY > this.state.maxScroll - 200 ? "show" : ""
            }`}
          >
            <img alt="spaceship" src={require(".//images/spaceship.png")} />
          </div>
          <div className="rope" style={ropeStyle}></div>
          <div className="belayRope" style={belayRopeStyle}></div>
          <div className="cliff">
            <img
              className="cliffTop"
              alt="cliff"
              src={require(".//images/Wall Top.png")}
              onLoad={this.setCliffTop}
            />
            <img alt="cliff" src={require(".//images/Wall 1.png")} />
            <img alt="cliff" src={require(".//images/Wall 2.png")} />
            <img alt="cliff" src={require(".//images/Wall 3.png")} />
            <img alt="cliff" src={require(".//images/Wall 1.png")} />
            <img alt="cliff" src={require(".//images/Wall 3.png")} />
            <img alt="cliff" src={require(".//images/Wall 2.png")} />
            <img alt="cliff" src={require(".//images/Wall 3.png")} />
          </div>
          {this.state.fallState === FallState.Recovering ? (
            <button
              type="button"
              className="btn"
              onClick={this.continueScrolling}
            >
              Continue
            </button>
          ) : (
            <div></div>
          )}
          {this.state.fallState === FallState.IsFalling ||
          this.state.fallState === FallState.Recovering ? (
            <div className="bubble">Don't worry! I got you!</div>
          ) : (
            <div></div>
          )}
          <div className="romy-bottom">
            <img alt="romy" src={require(".//images/Romy.png")} />
          </div>
          <div className="grass">{this.createGrass()}</div>
          <Content></Content>
        </div>
      </div>
    );
  }
}

export default App;
