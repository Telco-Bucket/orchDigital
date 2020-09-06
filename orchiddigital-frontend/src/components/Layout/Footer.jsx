import React from 'react'

export default function Footer() {
    return (
       
       
<footer className="page-footer font-medium bg-blue white pt-4" style={{background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 90%)"}}>
<hr className="w-100 mb-5 bg-white"/>
 
  <div className="container text-center text-md-left ">

    
    <div className="row">
   
    
      <div className="col-md-3 mt-md-0 mt-3">

        <h5 className="text-uppercase" style={{fontSize:"18px"}}>Our Mission</h5>
        <p>To improve rural livelihoods and sustainable food system in the globe and sustainable e-commerce eco-system</p>

      </div>
    


    
      <div className="col-md-3 mb-md-0 mb-3">

       
        <h5 className="text-uppercase" style={{fontSize:"18px"}}>Important Links</h5>

        <ul className="">
          <li>
            <a href="/enroll" style={{color:"white", fontSize:"16px"}}>Enroll Today!!</a>
          </li>
          <li>
            <a href="consultus" style={{color:"white", fontSize:"16px"}}>Book A Consultation</a>
          </li>
          <li>
            <a href="contactus" style={{color:"white", fontSize:"16px"}}>Contact Us</a>
          </li>
        </ul>

      </div>

      <div className="col-md-3 mb-md-0 mb-3">

       
<h5 className="text-uppercase" style={{fontSize:"18px"}}>Services</h5>

<ul className="list-unstyled">
  <li>
    <a href="/services#erp" style={{color:"white", fontSize:"16px"}}>ERP  softwares developement & maintainance</a>
  </li>
  <li>
    <a href="services#entrepreneurship" style={{color:"white", fontSize:"16px"}}>Entrepreneurship Trainer</a>
  </li>
  <li>
    <a href="services#agro_consulting" style={{color:"white", fontSize:"16px"}}>Agro Consulting</a>
  </li>
  <li>
    <a href="services#access_to_finance" style={{color:"white", fontSize:"16px"}}>Access To Finance</a>
  </li>
  
</ul>

</div>


<div className="col-md-3 mb-md-0 mb-3">

       
<h5 className="text-uppercase" style={{fontSize:"18px"}}>More Services</h5>

<ul className="list-unstyled">
  <li>
    <a href="/services#tax_audit" style={{color:"white", fontSize:"16px"}}>Insurance Audit & Tax Clearance</a>
  </li>
  <li>
    <a href="services#access_to_market" style={{color:"white", fontSize:"16px"}}>Access To Market</a>
  </li>
  <li>
    <a href="services#export_raw_materials" style={{color:"white", fontSize:"16px"}}>Export Of Raw Materials</a>
  </li>
  <li>
    <a href="services#fac_management" style={{color:"white", fontSize:"16px"}}>Facilities Management</a>
  </li>
</ul>

</div>  
     

    </div>
    
  

  </div>

  
  
  <div style={{background:'white', color:"black", fontSize:"16px"}} className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/"> OrchidDigitalConsulting.com</a>
  </div>
 

</footer>

      
    )
}
