import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/question'
import Result from './components/result'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
      <Route
          render={({ location }) => (

              <Switch location={location} >
                <Route exact path="/" component={Question} />
                <Route path="/home/:id" component={Question}/>
                <Route path="/result" component={Result}/>
              </Switch>
          )}
        /></Router>
    );
  }
}

export default App;
