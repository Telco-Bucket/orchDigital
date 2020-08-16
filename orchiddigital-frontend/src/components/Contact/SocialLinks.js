import React from 'react'

export default function SocialLinks() {
    return (
        
        <div className="p-1" style={{backgroundColor:"#3F3D56", height:"370px",paddingTop:"10px"}}>
           <h1 class="h1 text-white text-center">Speak with our  team.</h1> 
<h4 class="h4 text-white text-center">We’d love to hear more about your business, and how we can best serve you.</h4>
<h3 className="text-center text-white">You can reach out to us on social media today</h3>
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
        </div>
    )
}
