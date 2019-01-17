import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Header from './components/layout/Header';
import About from './pages/About';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">

              <Header />

              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
