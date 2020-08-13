import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Index from "../src/components/Home"
import About from "../src/components/About"

function App() {
  return (
    <>
      
       <Router>
         
       
        
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
      <Route path="/" exact component={Index} />
      <Route path="/about" exact component={About} />
   
   

    </Router>
    </>
  );
}

export default App;
