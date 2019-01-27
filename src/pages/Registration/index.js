import React, { Component } from 'react';
import ParentBanner from '../../components/ParentBanner';
import UserInputForm from '../../components/UserInputForm';
import './Registration.css';

  

class Registration extends Component {
  render() {
    return (
      <div>
  <ParentBanner />
  <UserInputForm />
     </div>
    );
  }
}

export default Registration;