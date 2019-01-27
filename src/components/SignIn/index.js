import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 
 }
render() {
    return (
      <div>
       
          <div id="signInBlock">
         <div id="signInText">Sign In</div>
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