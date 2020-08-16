import React from 'react'
import bgAddress from "../../Images/contactfstbg.svg"

export default function Address() {
    return (
        <div className="text-left p-5 m-5" style={{backgroundImage: `url(${bgAddress})`,width:"75vw", backgroundRepeat:"no-repeat", paddingTop:"50px"}}>
       
            
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Address</h5>
        <p>Plot 5 0ff Peter Odili Extension road,Gbajalam, Woji,<br/> Opposite Chelsea Filling Station,</p>
        <p><i className="fa fa-phone"></i> 07032533822, 09077251862</p>
        <p  className="text-small"><i className="fa fa-envelope"></i>  johndoe@orchdigitalconsulting.com</p>
      
        </div>
    )
}
