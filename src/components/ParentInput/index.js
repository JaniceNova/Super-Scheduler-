import React, { Component } from 'react';
import './ParentInput.css';

class ParentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentsname: '',
            email: '',
            parentcode: '',
            parentsbirthday: ''
        }

    }
    render() {
        return (
            <div>

                <div className="inputParentLabel">Parent's Name</div>
                <input className="informationParentInupt"
                    placeholder="Gaius"
                    hintText="Enter your Parent's Name"
                    floatingLabelText="Parent's Name"
                    onChange={(event, newValue) => this.setState({ parentsname: newValue })}
                />
                <br />
                <div className="inputParentLabel">Parent's Email</div>
                <input className="informationParentInupt"
                    placeholder="mrcaesar@gmail.com "
                    hintText="Enter your Email"
                    floatingLabelText="Email"
                    onChange={(event, newValue) => this.setState({ email: newValue })}
                />
                <br />
               
                <div className="inputParentLabel">Parent Code</div>
                <input className="informationParentInupt"
                    placeholder="1234"
                    hintText="Enter your Parent Code"
                    floatingLabelText="Parent Code"
                    onChange={(event, newValue) => this.setState({ parentcode: newValue })}
                />
                <div className="passwordParentRules">*The Parent Code is a 4 digit number used to unlock parent calendar tools.</div>
                <br />

                {/* <div className="inputParentLabel">Parent's Birthday</div>
                <input className="informationParentInupt"
                    placeholder="MM/DD/YYYY"
                    hintText="Enter your Parent's Birthday"
                    floatingLabelText="Parent's Birthday"
                    onChange={(event, newValue) => this.setState({ parentsbirthday: newValue })}
                />
                <br /> */}
                <br/>
               
                 
             <div id="parentsubmit">Submit</div> 

              

            </div>
        );
    }
}

export default ParentInput;