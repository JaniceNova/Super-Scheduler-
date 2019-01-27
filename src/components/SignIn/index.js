import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  x: 0,
  y: 0
  }
 }



 _onMouseMove = (e) => {
  const width = this.refs.signInText.clientWidth;
  const height = this.refs.signInText.clientHeight;
  const oX = (e.nativeEvent.offsetX/width) * 100;
  const oY = (e.nativeEvent.offsetY/height) * 100;
  console.log(oX, oY);
  this.setState({
      x: oX,
      y: oY
  })
}




render() {

  const x = this.state.x;
  const y = this.state.y;
  const maskStyle = { 
    '--maskX' : x,
    '--maskY' : y
  }
    return (
      <div>
       
          <div className="signInBlock">
         <div className="signInText" onMouseMove={this._onMouseMove} ref="signInText" style={maskStyle}>Sign In</div>
         <div className="signInText signInClone" onMouseMove={this._onMouseMove} ref="signInText" style={maskStyle}>Sign In</div>
           <input id="username" 
           placeholder="Username"
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
         
             <input id="password"
               type="password"
               placeholder="Password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <div id="submit">Submit</div>
            
         </div>
        
      </div>
    );
  }
}

export default SignIn;