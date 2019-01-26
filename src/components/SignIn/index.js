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
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
         
             <input id="password"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <button id="submit">Submit</button>
            
         </div>
        
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default SignIn;