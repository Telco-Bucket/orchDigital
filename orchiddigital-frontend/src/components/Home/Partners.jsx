import React, { Component } from "react";
import pind from "../../Images/partnersLogo/pind.svg"
import allianz from "../../Images/partnersLogo/allianz.svg"
import rosabon from "../../Images/partnersLogo/rosabon.svg"
import "./swing.css"

export class Partners extends Component {
  render() {
    return (
      <div id="team" className="text-center" >
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet Our Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="row">
          
                  <div   className="col-md-4 col-sm-6 team ">
                    <div className="thumbnail">
                      {" "}
                      <img src={pind} alt="..." className="team-img swing mb-2" />
                      <div className="caption">
                        <h3>PIND-Foundation</h3>
                       
                      </div>
                    </div>
                  </div>
                  <div   className="col-md-4 col-sm-6 team ">
                   
                    <div className="thumbnail">
                      {" "}
                      <img src={rosabon} alt="..." className="team-img swing mb-2" />
                      <div className="caption">
                        <h3>Rosabon Financial Services</h3>
                       
                      </div>
                    </div>
               


                  </div>
                  
                  <div   className="col-md-4 col-sm-6 team ">
                 
                    <div className="thumbnail">
                      {" "}
                      <img src={allianz} alt="..." className="team-img swing mb-2" />
                      <div className="caption">
                        <h3>Allianz Insurance Nigeria</h3>
                       
                      </div>
                    </div>
                    


                  </div>
                  
           
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
