import React from 'react'
import home from "../../Images/home.svg";

export default function FirstScreen() {
    return (
        
            <div className="pb-5 mt-sm-5" style={{backgroundImage: `url(${home})`, height:"90vh" , width:"100vw", backgroundRepeat:"no-repeat"}}>
          
          <div style={{maxWidth:"450px"}}>
          <h1 className="h1 p-3" style={{color:"#F2F2F2"}}>
          Grow Your Business Make It More Profitable 
          </h1>
          <h6 className="h6 p-3">
          Whether you are running a small, medium  or large scale business, we take care of your finances, operations, and more at Orchiddigital Consulting Limited.
          </h6>
          <div className="p-2">
          <button className="m-sm-1 m-xl-1 btn btn-success" style={{width:"193px", height:"72px", borderRadius:"0px" }}>Get Started</button>
          <button className="m-sm-1  m-xl-1 btn btn-outline-success" style={{width:"193px", height:"72px", background:"white",borderRadius:"0px" }}>Learn More</button>
          </div>
         
          </div>
          
         
        </div>
       
    )
}
