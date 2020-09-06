
import { Link } from 'react-router-dom';

import logo from "../../Images/logo.svg"
import { NavLink } from 'react-router-dom';
import menu from "../../Images/menu.svg" 

import React, {useEffect, useState} from 'react'




export default function NavBar() {
  const [hide, sethide] = useState(true)
  let show;
  useEffect(() => {
    document.getElementById("navbarNavDropdownddd").style.display=hide?"none":"block";
    console.log(hide)
  })
 

  return (

      


      <nav  className="navbar navbar-expand-lg navbar-light  position-fixed container-fluid" style={{zIndex:"1000",height:"80px", marginTop:"-8px", background:"white", fontSize:"130px !important"}}>
  <a className="navbar-brand" style={{width: "47vw"}} href="#"> 
  <NavLink to='/' >
       
        <img src={logo}  style={{height:"60px"}}  alt="logo"/>
       
     </NavLink> </a>
     
  {/* <button onClick={()=>sethide(!hide)} className="navbar-toggler h5" type="button" data-toggle="collapse" data-target="#navbarNavDropdownddd" aria-controls="navbarNavDropdownddd" aria-expanded="true" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span> */}
   <button className="navbar-toggler" style={{border:'none',  marginLeft:"30vw"}} data-toggle="modal" data-target="#exampleModal">
    {/* <i className="fa fa-bars h3 border-white" ></i> */}
    <img src={menu} alt="menu" style={{width:"25px", height:"25px", border:"green"}}/>
  
   
  </button>
 
  <div  className="navbar-collapse" id="navbarNavDropdownddd">
   
   {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal {/* <span class="iconify" data-inline="false" data-icon="ri:menu-3-fill"></span>
  
</button> */}
   
   <ul className="nav navbar-nav navbar-right h4 text-dark" style={{color:"black !important"}}>
              <li style={{color:"black"}}>
                <Link to = "/" className="page-scrol" style={{color:"black"}}>
                 Home
                </Link>
              </li>
              <li>
                <Link to = "/about" className="page-scroll" style={{color:"black"}}>
                 About
                </Link>
              </li>
              <li>
                <Link to = "/services" className="page-scroll" style={{color:"black"}}>
                 Services
                </Link>
              </li>
              <li>
                <Link to = "/contactus" className="page-scroll" style={{color:"black"}}>
                 Contact Us
                </Link>
              </li>
              <li>
                <Link to = "/consultus" className="page-scroll" style={{color:"black"}}>
                 Book A Consultation
                </Link>
              </li>
              {/* <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li> */}
            
      {/* <li className="nav-item dropdown">
        <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contact Us
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
    </ul>
  </div>


 



{/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div> */}
</nav>
   
  )
}
