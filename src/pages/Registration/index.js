import React, { Component } from 'react';
import Banner from '../../components/Banner';
import UserInputForm from '../../components/UserInputForm';
import './Registration.css';

  

class Registration extends Component {
  render() {
    return (
      <div>
  <Banner />
  <UserInputForm />
     </div>
    );
  }
}

export default Registration;