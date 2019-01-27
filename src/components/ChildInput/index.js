import React, { Component } from 'react';
import './ChildInput.css';

class ChildInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childsname: '',
            username: '',
            password: '',
            childsbirthday: ''
        }

    }
    render() {
        return (
            <div>

                <div className="inputLabel">Child's Name</div>
                <input className="informationInupt"
                    placeholder="Julius"
                    hintText="Enter your Child's Name"
                    floatingLabelText="Child's Name"
                    onChange={(event, newValue) => this.setState({ childsname: newValue })}
                />
                <br />
                <div className="inputLabel">Username</div>
                <input className="informationInupt"
                    placeholder="Username"
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange={(event, newValue) => this.setState({ username: newValue })}
                />
                <br />
               
                <div className="inputLabel">Password</div>
                <input className="informationInupt"
                    placeholder="Password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange={(event, newValue) => this.setState({ password: newValue })}
                />
                <div className="passwordRules">*Passwords must have 6 charaters.  Must include at least 1 capital letter, 1 number and 1 symbol.</div>
                <br />

                <div className="inputLabel">Child's Birthday</div>
                <input className="informationInupt"
                    placeholder="MM/DD/YYYY"
                    hintText="Enter your Child's Birthday"
                    floatingLabelText="Child's Birthday"
                    onChange={(event, newValue) => this.setState({ childsbirthday: newValue })}
                />
                <br />
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