import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Index from "../src/components/Home"
import About from "../src/components/About"
import  Contactus from "../src/components/Contact"

function App() {
  return (
    <>
       <Router>
      <Route path="/" exact component={Index} />
      <Route path="/about" exact component={About} />
      <Route path="/contactus" exact component={Contactus} />
    </Router>
    </>
  );
}

export default App;
