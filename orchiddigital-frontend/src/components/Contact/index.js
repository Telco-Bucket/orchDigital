import React from 'react'
import NavBar from '../Layout/NavBar'
import Footer from "../Layout/Footer"
import Space from "../Home/Piece"
import Form from "../Contact/ContactForm"
import Map from "../Home/Map"
import Firstpage from "./First"
import Address from "../Contact/Address"




export default function index() {
    return (
        <div style={{backgroundColor:"#F6F6F6"}}>
            <NavBar/>
            <Space/>
            <Firstpage/>
            
            <Form />
            <Address/>
           <Map/>
           <Footer/> 
        </div>
    )
}
