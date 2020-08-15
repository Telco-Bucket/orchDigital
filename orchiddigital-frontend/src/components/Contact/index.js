import React from 'react'
import NavBar from '../Layout/NavBar'
import Footer from "../Layout/Footer"
import Space from "../Home/Piece"
import Form from "../Contact/ContactForm"
import Map from "../Home/Map"
export default function index() {
    return (
        <div style={{backgroundColor:"#F6F6F6"}}>
            <NavBar/>
            <Space/>
            <Form />
            <Map/>
           <Footer/> 
        </div>
    )
}
