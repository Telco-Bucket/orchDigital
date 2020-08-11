import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "../src/components/NavBar";
import Index from "../src/components/Home"

function App() {
  return (
    <div className="App container">
      
       <Router>
         
       <NavBar/>
        
      {/* <nav className="navbar navbar-expand-lg bg-light navbar-light">
        
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
      </nav> */}
      <Route path="/home" exact component={Index} />
   

    </Router>
    </div>
  );
}

export default App;
