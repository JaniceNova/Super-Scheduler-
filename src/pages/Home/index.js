import React, { Component } from 'react';

import './Home.css';
import Banner from '../../components/Banner';
import AboutUs from '../../components/AboutUs';
import SignInRegisterWrapper from '../../components/SignInRegisterWrapper';
import SignIn from '../../components/SignIn';
import Register from '../../components/Register';
  


class Home extends Component {
  render() {
    return (
      <div>
     <Banner />
     <AboutUs />
     <SignInRegisterWrapper>
       <SignIn />
       <Register />
     </SignInRegisterWrapper>
     </div>
    );
  }
}

export default Home;
