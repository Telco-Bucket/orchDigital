import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export class ApplicationForm extends Component  { 

  constructor(props) {
    super(props);

    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
    this.onChangeContactMessage = this.onChangeContactMessage.bind(this);
    this.onChangePostedDate = this.onChangePostedDate.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        contact_name: '',
        contact_email: '',
        contact_message: '',
        posted_date:'',
        contact_number:"",
       
        isSuccess:false,
        isServerDown:false
     
    }
}

onChangePostedDate(e) {
  this.setState({
      posted_date: e.target.value
  });
}

onChangeContactEmail(e) {
    this.setState({
        contact_email: e.target.value
    });
}

onChangeContactName(e) {
    this.setState({
        contact_name: e.target.value
    });
}

onChangeContactMessage(e) {
    this.setState({
        contact_message: e.target.value
    });
}
onChangeContactNumber(e) {
  this.setState({
      contact_number: e.target.value
  });
}

onSubmit(e) {
    e.preventDefault();
    
    console.log(`Form submitted:`);
    console.log(`Contact Name: ${this.state.contact_name}`);
    console.log(`Contact Message: ${this.state.contact_message}`);
    console.log(`Email: ${this.state.contact_email}`);
    console.log(`Date: ${this.state.posted_date}`);
    console.log(`Number: ${this.state.contact_number}`);

    const newContact = {
      contact_name: this.state.contact_name,
      contact_email: this.state.contact_email,
      contact_message: this.state.contact_message,
      posted_date: this.state.posted_date,
      contact_number: this.state.contact_number,
     
       
    }

    axios.post('http://localhost:4001/consult_form/add', newContact)
        .then(res => { if(res.status===200){
          this.setState({isSuccess:true})
          console.log(res.data)
        }else if(res.status===503){
          this.setState({isServerDown:true})
        }});

    this.setState({
      contact_name: '',
      contact_number:"",
      contact_email: '',
      contact_message: '',
      posted_date:""
    })
    
}
  render(){
    if(this.state.isSuccess){
      return <Redirect to= "/success"/>
    }else if(this.state.isServerDown){
      return <Redirect to="/serverdown"/>
    }
    return (
        <div >
        <div id="contact">
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="section-title">
                  <h2>Book A Consultation</h2>
                  <p>
                    Please fill out the form below to book a Consultation with us. Do not forget to specify the date.
                  </p>
                </div>
                <form name="sentMessage" id="contacForm" onSubmit={this.onSubmit}>
                  <div className="row " >
                  <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="date"
                          id="number"
                          value={this.state.posted_date}
                          
                          onChange={this.onChangePostedDate}
                          className="form-control"
                          placeholder="Pick a Date to come"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>


                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          value={this.state.contact_name}
                          
                          onChange={this.onChangeContactName}
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="number"
                          value={this.state.contact_number}
                          
                          onChange={this.onChangeContactNumber}
                          className="form-control"
                          placeholder="Phone Number"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          value={this.state.contact_email}
                          
                          onChange={this.onChangeContactEmail}
                          className="form-control"
                          placeholder="Email"
                        
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                 
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      value={this.state.contact_message}
                          
                          onChange={this.onChangeContactMessage}
                      placeholder="Write to us"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Book
                  </button>
                </form>
              </div>
            </div>
           </div>
              </div>
              </div>
    )
}
}




export default ApplicationForm
