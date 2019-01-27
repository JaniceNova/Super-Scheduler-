import React, { Component } from 'react';
import './ChildInput.css';

class ChildInput extends Component {
constructor(props){
  super(props);
  this.state={
  childsname:'',
  username:'',
  password:'',
  childsbirthday:''
  }
 
 }
render() {
    return (
      <div>
       <input className="username"
           placeholder="Username"
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
          {/* <div className="signInBlock">
         <div className="signInText">Sign In</div>
           <input className="username"
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
             <div id="submit">Submit</div> */}
            
         {/* </div> */}
        
      </div>
    );
  }
}

export default ChildInput;