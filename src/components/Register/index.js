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
        
             <div id="registerButton"><div id="registerText">Register</div></div>
            
         </div>
        
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Register;