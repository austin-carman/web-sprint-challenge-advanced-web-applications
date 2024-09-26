import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";
import axios from "axios";

function App() {
  
  const handleLogOut = () => {
    localStorage.removeItem('token');
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={handleLogOut} data-testid="logoutButton" href="/login">logout</a>
        </header> 

        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path='/BubblePage' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.