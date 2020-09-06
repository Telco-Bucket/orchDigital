import React from 'react';

// import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import {Redirect} from "react-router-dom"
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Index from "../src/components/Home"
import contactus from "../src/components/Contanct"
import services from "../src/components/Services"
import about from "../src/components/About/index"
import consultus from "../src/components/Consultation"
import error from "../src/components/Layout/Error"

import { Cube} from 'react-preloaders';
function App() {
  return (
<>
    <BrowserRouter>
         <Cube/>
         <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/contactus" exact component={contactus} />
      <Route path="/services" exact component={services} />
      <Route path="/about" exact component={about} />
      <Route path="/consultus" exact component={consultus} />
      <Route path="/404" component={error} />
      <Redirect to="/404" />
      </Switch>
      </BrowserRouter>
      </>
  )
}

export default App;
