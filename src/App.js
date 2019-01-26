import React, { Component } from 'react';

import './App.css';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import SignInRegisterWrapper from './components/SignInRegisterWrapper';
  


class App extends Component {
  render() {
    return (
      <div>
     <Banner />
     <AboutUs />
     <SignInRegisterWrapper>
       
     </SignInRegisterWrapper>
     </div>
    );
  }
}

export default App;
