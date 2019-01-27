import React, { Component } from 'react';

import './Home.css';
import Banner from '../../components/Banner';
import AboutUs from '../../components/AboutUs';
import SignInRegisterWrapper from '../../components/SignInRegisterWrapper';
import SignIn from '../../components/SignIn';
import Register from '../../components/Register';
  


class Home extends Component {
  componentDidMount() {
    document.body.classList.add('bg-one');
  }
  
  componentWillUnmount() {
      document.body.classList.remove('bg-one');
  }
    
  render() {
    return (
      <div className="background"   >
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
