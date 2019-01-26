import React, { Component } from 'react';
import './register.css';

class Register extends Component {
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
       
          <div>
        
             <button id="registerButton">Register</button>
            
         </div>
        
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Register;