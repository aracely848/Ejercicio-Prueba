import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/home/Home';
import Main from './containers/main/Main';

class App extends Component {
  
  render () {
    return (
      <>        
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
      </>       
    );
  }
}


export default App;