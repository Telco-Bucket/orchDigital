//import React, {useEffect} from 'react'
//import {BrowserRouter as  Link} from "react-router-dom";
import logo from "../../Images/logo.svg"



import React, { useState } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Menu } from 'react-feather';

const StyledNav = styled('div')`
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  vertical-align: middle;
  div {
    heigh: 100%;
  }
  a {
    text-decoration: none;
  }
`;

const Logo = styled('h3')`
 
`;

const LinkSection = styled('ul')`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 100%;
  margin-top: 15px;
  transition: 0.23s linear;
  li {
    list-style: none;
    a {
      background: gray;
      text-decoration: none;
      display: block;
      text-align: center;
      padding: 10px 5px;
      color: black;
      font-weight: 600;
      transition: 1s ease-out;
      :hover {
        background: #3F3D56;
        color:white;
      }
    }
    :last-child {
      a {
        background: #ffffff;
        color: black;
        :hover {
          background: #ffffff99;
        }
      }
    }
  }
  @media (min-width: 834px) {
    display: inline-flex;
    width: auto;
    margin-top: 8px;
    li {
      a {
        background: #ffffff00;
        padding: 10px 15px;
        border-radius: 4px;
        margin: 0 3px;
        :hover {
          background: #840084;
        }
      }
    }
  }
`;

const MenuButton = styled('button')`
  display: none;
  border: none;
  border: 1px #ffffff55 solid;
  border-radius: 4px;
  background: #ffffff00;
  color: black;
  font-size: 1.1em;
  margin-top: 10px;
  padding: 5px 15px;
  line-height: 100%;
  transition: 1s ease-out;
  @media (max-width: 834px) {
    display: inline;
    :hover {
      background: #ffffffaa;
    }
  }
`;

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <StyledNav style={{marginTop:"20px", boxShadow:"gray"}}>
      <NavLink to='/'>
        <Logo>
        <img src={logo}  style={{height:"80px"}}  alt="logo"/>
        </Logo>
      </NavLink>

      <MenuButton style={{outline:"none"}} onClick={() => setVisible((prev) => !prev)}>
        <Menu />
      </MenuButton>
      <LinkSection show={visible} className="container" >
        <li>
          <a href='#tour'>Home</a>
        </li>
        <li>
          <a href='#security'> About</a>
        </li>
        <li>
          <a href='#pricing'>Services</a>
        </li>
        <li>
          <a href='#support'>FAQs</a>
        </li>
        <li>
          <a href='#signin'>Events</a>
        </li>
        <li>
          <a href='#signin'>Contact Us</a>
        </li>
      </LinkSection>
    </StyledNav>
  );
};

export default NavBar;


// export default function NavBar() {


//   useEffect(() => {
//  let ul= document.getElementById("ul")
//     if(window.innerWidth<"300"){
//       ul.style.display ="grid";
//       ul.style.gridTemplateColumns="1fr";
//       ul.style.background="red";
//       alert(ul.innerHTML);
//       alert("hello world")
//     }
//   })
  
//     return (
        
//         <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

//         <div className="container">
//           <div className="row align-items-center">
            
//             <div className="col-6 col-md-3 col-xl-4  d-block">
//               <h1 className="mb-0 site-logo"><a href="index.html" className=" mb-0"><img src={logo}  style={{height:"70px"}}/></a></h1>
//             </div>
  
//             <div className="col-12 col-md-9 col-xl-8 main-menu">
//               <nav className="site-navigation position-relative text-right" role="navigation">
  
//                 <ul id="ul" className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                
//                   <li><a><Link to="/" className="nav-link">Home</Link></a></li>
//                   <li><a><Link to="/" className="nav-link">Features</Link></a></li>
//                   <li className="has-children">
//                   <a><Link to="/" className="nav-link">About us</Link></a>
//                     <ul className="dropdown arrow-top">
//                       <li><a><Link to="/" className="nav-link"><span className="text-primary">More Free Templates</span></Link></a></li>
//                       <li><a><Link to="/" className="nav-link">Our Team</Link></a></li>
//                       <li className="has-children">
//                       <a><Link to="/" >More Links</Link></a>
//                         <ul className="dropdown">
//                           <li><a><Link to="/" >Menu one</Link></a></li>
//                           <li><a><Link to="/">Menu 2</Link></a></li>
//                           <li><a><Link to="/" >Menu 3</Link></a></li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                   <li><a><Link to="/" className="nav-link">Testimonials</Link></a></li>
//                   <li><a><Link to="/" className="nav-link">Blog</Link></a></li>
//                   <li><a><Link to="/" className="nav-link">Contact</Link></a></li>
//                 </ul>
//               </nav>
//             </div>
  
  
//             <div className="col-6 col-md-9 d-inline-block d-lg-none ml-md-0" ><a href="#" className="site-menu-toggle js-menu-toggle text-black float-right"><i className="fa fa-book"></i></a></div>
  
//           </div>
//         </div>
        
//       </header>
//     )
// }