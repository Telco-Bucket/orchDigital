import React from 'react'
import {BrowserRouter as  Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
export default function NavBarsm() {
    return (
        <div  className="text-center modal  fade mt-5 pt-5 bg-green" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div style={{marginTop:'23vh'}}   className="modal-dialog bg-blue text-center" role="document">
    <div className="modal-content bg-blue" >
  
        
        <div  type="button" className="text-center" data-dismiss="modal" aria-label="Close">
          
          <span aria-hidden="true"  className="iconify" data-inline="false" data-icon="ion:close-circle" style={{color: "#fff",width:"60px", height:"60px", marginTop:"-60px"}}></span>
        
      </div>
      <div className="modal-body" style={{marginTop:"-30px"}}>
      <ul className= "text-center h5 pt-5" style={{color:"black", height:"200px"}}>
      <li><a href="/" style={{color:"black", fontWeight:"lighter"}}>Home</a></li>
      <hr/>
     
      <li> <a href="/services" style={{color:"black", fontWeight:"lighter"}}>Services</a></li>
      <hr/>
      <li> <a href="/contactus" style={{color:"black", fontWeight:"lighter"}}>Contact Us</a></li>
      <hr/>
      <li> <a href="/about" style={{color:"black", fontWeight:"lighter"}}>About</a></li>
      <hr/>
      <li> <a href="/consultus" style={{color:"black", fontWeight:"lighter"}}>Book a Consultation</a></li>
     
      </ul>
      </div>
      
    </div>
  </div>
</div>
    )
}
