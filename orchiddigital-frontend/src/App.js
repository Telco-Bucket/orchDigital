import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import NavBar from "../src/components/NavBar";

function App() {
  return (
    <div className="App">
       <Router>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        
        <Link to="/" className="navbar-brand h3">
          MERN TodoApp
        </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todo</Link>
              </li>
              
              <li className="navbar-item">
                <Link to="/" className="nav-link">Create Todo</Link>
              </li>

            </ul>

          </div>
      </nav>
      <Route path="/" exact component={NavBar} />
   

    </Router>
    </div>
  );
}

export default App;
