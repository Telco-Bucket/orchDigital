// //import React, {useEffect} from 'react'
// //import {BrowserRouter as  Link} from "react-router-dom";
// import logo from "../../Images/logo.svg"
// import { NavLink } from 'react-router-dom';


// import React, { useState } from 'react';
// import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';
// import { Menu } from 'react-feather';

// const StyledNav = styled('div')`
//   font-size: 1rem;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   margin-bottom: 1.5rem;
//   vertical-align: middle;
//   div {
    
//   }
//   a {
//     text-decoration: none;
//   }
// `;

// const Logo = styled('h3')`
 
// `;

// const LinkSection = styled('ul')`
//   display: ${(props) => (props.show ? 'block' : 'none')};
//   width: 100%;
//   margin-top: 15px;
//   transition: 0.23s linear;
//   li {
//     list-style: none;
//     a {
//       background: gray;
//       text-decoration: none;
//       display: block;
//       text-align: center;
//       padding: 10px 5px;
//       color: black;
//       font-weight: 600;
//       transition: 1s ease-out;
//       :hover {
//         background: #3F3D56;
//         color:white;
//       }
//     }
//     :last-child {
//       a {
//         background: #ffffff;
//         color: black;
//         :hover {
//           background: #ffffff99;
//         }
//       }
//     }
//   }
//   @media (min-width: 834px) {
//     display: inline-flex;
//     width: auto;
//     margin-top: 8px;
//     li {
//       a {
//         background: #ffffff00;
//         padding: 10px 15px;
//         border-radius: 4px;
//         margin: 0 3px;
//         :hover {
//           background: #840084;
//         }
//       }
//     }
//   }
// `;

// const MenuButton = styled('button')`
//   display: none;
//   border: none;
//   border: 1px #ffffff55 solid;
//   border-radius: 4px;
//   background: #ffffff00;
//   color: black;
//   font-size: 1.1em;
//   margin-top: 10px;
//   padding: 5px 15px;
//   line-height: 100%;
//   transition: 1s ease-out;
//   @media (max-width: 834px) {
//     display: inline;
//     :hover {
//       background: #ffffffaa;
//     }
//   }
// `;

// const NavBar = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <StyledNav style={{marginTop:"10px", boxShadow:"gray"}}>
//       {/* <NavLink to='/'>
//         {/* <Logo>
//         <img src={logo}  style={{height:"60px"}}  alt="logo"/>
//         </Logo> }
//       </NavLink> */}

//       <MenuButton style={{outline:"none"}} onClick={() => setVisible((prev) => !prev)}>
//         <Menu />
//       </MenuButton>
//       <LinkSection show={visible} classNameName="container" >
//         <li>
//           <a href='/'>Home</a>
//         </li>
//         <li>
//           <a href='/about'> About</a>
//         </li>
//         <li>
//           <a href='/'>Services</a>
//         </li>
//         <li>
//           <a href='/'>FAQs</a>
//         </li>
//         <li>
//           <a href='/'>Events</a>
//         </li>
//         <li>
//           <a href='/'>Contact Us</a>
//         </li>
//       </LinkSection>
//     </StyledNav>
//   );
// };

// export default NavBar;

import logo from "../../Images/logo.svg"
 import { NavLink } from 'react-router-dom';

import React from 'react'

export default function NavBar() {
  return (
    <div>
      


      <nav className="navbar navbar-expand-lg navbar-light h4">
  <a className="navbar-brand" style={{width: "40vw"}} href="#"> 
  <NavLink to='/' >
       
        <img src={logo}  style={{height:"60px"}}  alt="logo"/>
       
     </NavLink> </a>
  <button className="navbar-toggler h3" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Contact Us
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
