import React, { Component } from 'react';

import './AboutUs.css';



class AboutUs extends Component {
constructor(props){
    super(props);
    this.state = {
        x: 0,
        y: 0
    }
}
    _onMouseMove = (e) => {
    const width = this.refs.AboutUsBox.clientWidth;
    const height = this.refs.AboutUsBox.clientHeight;
    const oX = (e.nativeEvent.offsetX/width) * 100;
    const oY = (e.nativeEvent.offsetY/width) * 100;
    console.log(oX, oY);
    this.setState({
        x: oX,
        y: oY
    })
}
  render() {
      const {x, y} = this.state;
      const maskStyle = { 
        '--maskX' : x,
        '--maskY' : y
      }
    return (
  <div className="titleContainer">
      <div className="AboutUsBox" onMouseMove={this._onMouseMove} ref="AboutUsBox" style={maskStyle}>
        <div className="AboutUsHeader">Collaborative calendar parents and children fill out together.
        </div>
        <br />
       <div className="aboutSubHeader">Parents can:</div>
        <ul>
            <li className="aboutBullets">input daily task for children</li>
            <li className="aboutBullets">set prizes based off of task completed</li>
            <li className="aboutBullets">mark events or holidays</li>
            <li className="aboutBullets">comment on children's work</li>
        </ul>
        <div className="aboutSubHeader">Children can:</div>
        <ul>
            <li className="aboutBullets">practice future planning skills</li>
            <li className="aboutBullets">mark events or holidays</li>
            <li className="aboutBullets">add personal task to calendar</li>
            <li className="aboutBullets">complete parent added task to earn badges and win prizes!!!</li>
        </ul>
      </div>


      <div className="AboutUsBox cloneWrapper" onMouseMove={this._onMouseMove} ref="AboutUsBox" style={maskStyle}>
        <div id="AboutUsHeader">Collaborative calendar parents and children fill out together.</div>
        <br />
       <div className="aboutSubHeader">Parents can:</div>
        <ul>
            <li className="aboutBullets">input daily task for children</li>
            <li className="aboutBullets">set prizes based off of task completed</li>
            <li className="aboutBullets">mark events or holidays</li>
            <li className="aboutBullets">comment on children's work</li>
        </ul>
        <div className="aboutSubHeader">Children can:</div>
        <ul>
            <li className="aboutBullets">practice future planning skills</li>
            <li className="aboutBullets">mark events or holidays</li>
            <li className="aboutBullets">add personal task to calendar</li>
            <li className="aboutBullets">complete parent added task to earn badges and win prizes!!!</li>
        </ul>
      </div>


  </div>
    );
  }
}

export default AboutUs;