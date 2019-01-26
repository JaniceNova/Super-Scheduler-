import React, { Component } from 'react';

import './App.css';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';

class App extends Component {
  render() {
    return (
      <div>
     <Banner />
     <AboutUs />
     
     </div>
    );
  }
}

export default App;
