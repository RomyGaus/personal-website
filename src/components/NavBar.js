import React, { Component } from 'react';

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      isActive: false,
    }
  }

  toggleNavBar = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  };

  render() {
    return (
      <nav className={this.state.isActive ? 'active' : ''} id="nav">
        <ul>
          <li><a href="https://github.com/RomyGaus" target='_blank' rel='noreferrer'>GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/romy-gaus-46615b272/" target='_blank' rel='noreferrer'>LinkedIn</a></li>
          <li><a href="https://www.youtube.com/@RomyGaus" target='_blank' rel='noreferrer'>YouTube</a></li>
          <li><a href="" target='_blank' rel='noreferrer'>Resume</a></li>
        </ul>
        <button className="icon" id="toggle" onClick={this.toggleNavBar}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>
      </nav>
    )
  }
}

export default NavBar;