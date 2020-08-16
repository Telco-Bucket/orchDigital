import React from 'react';
import NavBar from "../Layout/NavBar"
import "../Home/home-styles.css"
import FirstScreen from "../Home/FirstScreen"
import Services from "../Home/Services"
import Partners from "../Home/Partners"
import Footer from '../Layout/Footer'
import  Map from "../Home/Map"
import Piece from "../Home/Piece"
import  Form from "../Home/Form"
import Testimonies from "../Home/Testimonies"
import Typing from "../Home/Typed"






 

export default function Index() {
  
    return (

        <>
        <NavBar/>
        <Piece/>
     
        <FirstScreen/>
     
        <Services/>
        
        <Partners/>
        <Testimonies/>
        <Typing/>
        <Footer/>
        
        </>
    )
}
