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
import admin from "./components/Admin/Contact_Form_Table/index"
import ConsultFormTable from "./components/Admin/Consultation_Form_Table/ConsultFormTable"
import delete_contact from "./components/Admin/Contact_Form_Table/DeleteContact"
import DeleteConsultList from "./components/Admin/Consultation_Form_Table/DeleteConsultList"
import ApplicationForm from "./components/ApplicationForm/index"
import { Cube} from 'react-preloaders';
import Confirm from './components/Layout/Confirm';
import NotSent from './components/Layout/NotSent';
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
      <Route path="/admin" exact component={admin} />
      <Route path="/success" exact component={Confirm} />
      <Route path="/consultformtable" exact component={ConsultFormTable}/>
      <Route path="/serverdown" exact component={NotSent}/>
      <Route path ="/delete_contact/:id" exact component={delete_contact}/>
      <Route path ="/delete_consult_list/:id" exact component={DeleteConsultList}/>
      <Route path ="/apply" exact component={ApplicationForm}/>
      <Route path="/404" component={error} />
     
      <Redirect to="/404" />
      </Switch>
      </BrowserRouter>
      </>
  )
}

export default App;
