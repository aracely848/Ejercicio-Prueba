import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../../components/myNavbar/Navbar';
import Menu from '../../components/menu/Menu';
import Gallery from '../../components/gallery/Gallery';
import Chat from '../../components/chat/Chat';
import Map from '../../components/map/Map';
import ToDo from '../../components/to-do/To-do';

class Home extends Component {
  
  render () {
    return (
      <>
        <div className="row">
        <Router>
          <Navbar />
          <Menu />
          <Route exact path="/home"component={Gallery} />
          <Route exact path="/home/gallery"component={Gallery} />
          <Route exact path="/home/todo" component={ToDo} />
          <Route exact path="/home/map" component={Map} />
          <Route exact path="/home/chat" component={Chat} />
        </Router>
        </div>
      </>       
    );
  }
}

export default Home;