import React from 'react';
import home from "../../Images/home.svg";
import "../Home/home-styles.css"


export default function Index() {
    return (
        <div className="container-fluid" style={{backgroundImage: `url(${home})`, height:"100vh", backgroundRepeat:"no-repeat"}}>
          <div style={{maxWidth:"300px"}}>
          <h1 className="h1 p-2">
          Grow Your Business Make It More Profitable 
          </h1>
          <h6 className="h6 p-2">
          Whether you are running a small or medium business, take care of your finances, operations, and more with Orchiddigital Consulting Limited.
          </h6>
          <div className="p-2">
          <button className="btn btn-success">Get Started</button>
          <button className="btn btn-outline-success">Learn More</button>
          </div>
         
          </div>
         
        </div>
    )
}
