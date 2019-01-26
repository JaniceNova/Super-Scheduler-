import React, { Component } from 'react';

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
       
          <div>
         <div>Sign In</div>
           <input
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
         
             <input
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <button>Submit</button>
            
         </div>
        
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default SignIn;