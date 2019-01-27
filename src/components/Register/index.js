import React, { Component } from 'react';
import './register.css';
import {

  Link,

} from "react-router-dom";

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
        
    
        <Link to="/Registration" className="linkText">
            <div id="registerButton"><div id="registerText">Register</div></div>
         </Link>
            
         </div>
        
      </div>
    );
  }
}

export default Register;