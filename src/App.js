import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      	<h1>Deep AI Tech</h1>
        <div>
        	<a href="http://localhost:3001/">Mood Checker</a><br/>
        	<a href="http://localhost:4200/dashboard">Colorizer</a>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
