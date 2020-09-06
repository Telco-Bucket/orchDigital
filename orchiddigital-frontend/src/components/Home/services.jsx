import React, { Component } from "react";
import Zoom from 'react-reveal/Zoom';
export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
        
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                <Zoom >
                  <div  key={`${d.name}-${i}`} className="col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}  </p>
                      <p><a href="/services" style={{color:"green"}}>Learn more...</a></p>
                    </div>
                  </div>
                  </Zoom>
                ))
              : "loading"}
          </div>
         
        </div>
       
      </div>
    );
  }
}

export default Services;
