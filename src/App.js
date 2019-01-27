import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Registration from './pages/Registration';
 

  


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
         
        </ul> */}
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Registration" component={Registration} />
       
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
