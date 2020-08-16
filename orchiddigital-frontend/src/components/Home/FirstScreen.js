        
import React from "react"
import home from "../../Images/home.svg";
import Flip from 'react-reveal/Flip';
import  Button from "../Layout/Button"



export default function FirstScreen() {


    return (
        
            <div className=" first" style={{backgroundImage: `url(${home})`, height:"90vh" , width:"98vw", backgroundRepeat:"no-repeat", paddingTop:"50px"}}>
          
          <div style={{maxWidth:"450px"}}>
          <h1 className="h1 p-3" style={{color:"#F2F2F2"}}>
          Grow Your Business and Make It More Profitable 
          </h1>
          <h6 className="h6 p-3">
          Whether you are running a small, medium  or large scale business, we take care of your finances, operations, and more at Orchiddigital Consulting Limited.
          </h6>
          <div className="p-2">
          <Flip left>
            <Button Type="button" Text="Get Started"/>
            
        </Flip>
              <Flip right>
              <button id="btn-start2 " data-aos={"fade-right"} className="btn-learn m-sm-1  m-xl-1 btn btn-outline-start h1" style={{width:"193px", height:"62px", background:"white", border:"1px solid  #3F3D56", color:"#3F3D56" }}>Learn More</button>
           </Flip>
          
          </div>
         
          </div>
          
         
        </div>
       
    )
}
