import React, { Component } from 'react'
import farmpic from "../../Images/farmorchid.jpg"
import Background from "../../Images/bg/bg.jpg"
import { Link } from 'react-router-dom'
import Buttons from '../Layout/Buttons'
import Typed from 'react-typed';


export class HomeScreen extends Component {
  render() {
    return (
        <div id="about" style={{paddingTop:"150px", backgroundImage: `url(${Background})`}}>
        <div className="container">
          <div className="row">
              <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2 className="h1 my-5" style={{fontSize:"45px", fontWeight:"bold"}}>Grow Your  Business and Make It More <br/><span style={{fontWeight:"bolder", color:"blue"}}><Typed
                    strings={[' Profitable','  Sustainable', "Reliable"]}
                    typeSpeed={60}
                    loop
                /></span></h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                
               <Buttons/>
                {/* <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-xs-12 col-md-6"> <img src={farmpic} className="img-responsive" style={{width:"100%"}} alt=""/> </div>
        
          </div>
        </div>
      </div>
    )
  }
}

export default HomeScreen
