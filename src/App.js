import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route, NavLink} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <ul>
        <li><NavLink exact activeClassName="active-link" to="/">Home</NavLink></li>
        <li><NavLink exact activeClassName="active-link" to="/about">About</NavLink></li>
        <li><NavLink exact activeClassName="active-link" to="/contact">Contact</NavLink></li>
      </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path ="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
