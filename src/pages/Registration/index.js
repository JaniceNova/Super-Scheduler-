import React, { Component } from 'react';
import ParentBanner from '../../components/ParentBanner';
import UserInputFormRight from '../../components/UserInputFormRight';
import UserInputFormLeft from '../../components/UserInputFormLeft';
import ChildInput from '../../components/ChildInput';
import ParentInput from '../../components/ParentInput';
import './Registration.css';

  

class Registration extends Component {
  render() {
    return (
      <div>
  <ParentBanner />
  <UserInputFormLeft>
     <ChildInput />
  </UserInputFormLeft>
  <UserInputFormRight>
   <ParentInput />
  </UserInputFormRight>
     </div>
    );
  }
}

export default Registration;