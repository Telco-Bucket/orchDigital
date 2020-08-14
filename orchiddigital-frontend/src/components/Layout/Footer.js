import React from 'react'
import {BrowserRouter as Link} from "react-router-dom";

export default function Footer() {
    return (
      
            
<footer className="page-footer mt-5 h stylish-color-dark pt-4" style={{background: "rgba(63, 61, 86,0.8)", fontFamily:"Inter", color:"white"}}>

  
  <div className="container text-md-left text-center">

    
    <div className="row">

      
      <div className="col-md-4 mx-auto">

       
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Address</h5>
        <p>Plot 5 0ff Peter Odili Extension road,Gbajalam, Woji, Opposite Chelsea Filling Station,</p>
        <p><i className="fa fa-phone"></i> 07032533822, 09077251862</p>
        <p><i className="fa fa-envelope"></i>  johndoe@orchdigitalconsulting.com</p>
      </div>
    

      <hr className="clearfix w-100 d-md-none"/>

 
      <div className="col-md-2 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Impoetant Links</h5>

        <ul className="list-unstyled">
          <li>
            <Link to="/" >lorem lorm lorem iopsum</Link>
          </li>
          <li>
            <Link to="/" >lorem lorm lorem iopsum</Link>
          </li>
          <li>
            <Link to="/" >lorem lorm lorem iopsum</Link>
          </li>
          
        </ul>

      </div>
     

      <hr className="clearfix w-100 d-md-none"/>

    
      <div className="col-md-2 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Legals</h5>

        <ul className="list-unstyled">
        <li>
            <Link to="/" >lorem lorm lorem iopsum</Link>
          </li>
          <li>
            <Link to="/" >lorem lorm lorem iopsum</Link>
          </li>
          <li>
            <Link to="/" >lorem lorm lorem iopsum</Link>
          </li>
         
        </ul>

      </div>
      

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-2 mx-auto">

        
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Our Services</h5>

        <ul className="list-unstyled">
        <li>
            <Link to="/" >lorem lorm lorem iopsum</Link>
          </li>
          <li>
            <Link to="/" >lorem lorm lorem iopsum</Link>
          </li>
          <li>
            <Link to="/" >lorem lorm lorem iopsum</Link>
          </li>
        </ul>

      </div>
     
    </div>
    
  </div>
  

  <hr/>

  <ul className="list-unstyled list-inline text-center py-2" style={{background: "rgba(63, 61, 86,0.9)"}}>
    <li className="list-inline-item">
      <h5 className="mb-1">Consult us today</h5>
    </li>
    <li className="list-inline-item">
      <a href="#!" className="btn btn-danger btn-rounded">Get Started</a>
    </li>
  </ul>


  <hr/>

  <ul className="list-unstyled list-inline text-center" >
    <li className="list-inline-item">
      <a className="btn-floating btn-fb mx-1" style={{fontSize:"60px", color:"white"}}>
        <i className="fa fa-facebook"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-tw mx-1" style={{fontSize:"60px", color:"white"}}>
        <i className="fa fa-twitter"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-gplus mx-1" style={{fontSize:"60px", color:"white"}}>
        <i className="fa fa-google-plus"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-li mx-1" style={{fontSize:"60px", color:"white"}}>
        <i className="fa fa-linkedin"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-dribbble mx-1" style={{fontSize:"60px", color:"white"}}>
        <i className="fa fa-dribbble"> </i>
      </a>
    </li>
  </ul>
 
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href=""> Orchiddigital.com</a>
  </div>
 

</footer>

    )
}
