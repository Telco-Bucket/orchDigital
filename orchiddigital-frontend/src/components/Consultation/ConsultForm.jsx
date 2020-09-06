import React, { Component } from "react";


export class ConsultForm extends Component {
  render() {
    return (
      <div >
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Book A Consultation</h2>
                  <p>
                    Please fill out the form below to book a Consultation with us. Do not forget to specify the date.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                  <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="date"
                          id="number"
                          className="form-control"
                          placeholder="Pick a Date to come"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>


                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
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
                          type="text"
                          id="number"
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
          
    );
  }
}

export default ConsultForm;
