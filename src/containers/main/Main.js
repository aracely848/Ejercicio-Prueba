import React from 'react';
import Login from '../../components/login/Login';
import Navbar from '../../components/myNavbar/Navbar';
import './main.css';


function Main() {
  return (  
    <div className="row">
      <Navbar/>
      <Login />
    </div>
  
  );
}

export default Main;