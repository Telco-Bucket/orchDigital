import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export default class Form extends Component { 

  constructor(props) {
    super(props);

    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
    this.onChangeContactMessage = this.onChangeContactMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        contact_name: '',
        contact_email: '',
        contact_message: '',
        isSuccess:false,
        isServerDown:false
     
    }
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

onSubmit(e) {
    e.preventDefault();
    
    console.log(`Form submitted:`);
    console.log(`Contact Name: ${this.state.contact_name}`);
    console.log(`Contact Message: ${this.state.contact_message}`);
    console.log(`Email: ${this.state.contact_email}`);
  

    const newContact = {
      contact_name: this.state.contact_name,
      contact_email: this.state.contact_email,
      contact_message: this.state.contact_message,
       
    }

    axios.post('http://localhost:4001/contact_form/add', newContact)
        .then(res => { if(res.status===200){
          this.setState({isSuccess:true})
          console.log(res.data)
        }else if(res.status===503){
          this.setState({isServerDown:true})
        }});

    this.setState({
      contact_name: '',
      contact_email: '',
      contact_message: '',
    })
    
}
  render(){
    if(this.state.isSuccess){
      return <Redirect to= "/success"/>
    }else if(this.state.isServerDown){
      return <Redirect to="/serverdown"/>
    }
    return (
        <div>
             <form name="sentMessage" id="contactForm" onSubmit={this.onSubmit}>
             <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          value={this.state.contact_name}
                          id="name"
                          onChange={this.onChangeContactName}
                          className="form-control"
                          placeholder="Name"
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
                          required="required"
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
                      placeholder="Message"
                      value={this.state.contact_message}
                      
                      onChange={this.onChangeContactMessage}
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg p4">
                    Send Message...
                  </button>
                </form>
            
        </div>
    )
}
}
