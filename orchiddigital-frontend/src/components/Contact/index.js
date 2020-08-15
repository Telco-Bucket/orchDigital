import React from 'react'
import NavBar from '../Layout/NavBar'
import Footer from "../Layout/Footer"
import Space from "../Home/Piece"
import Form from "../Contact/ContactForm"

export default function index() {
    return (
        <div style={{backgroundColor:"#F6F6F6"}}>
            <NavBar/>
            <Space/>
            <Form Title="Contact Us"  showPurpose="none"/>

           <Footer/> 
        </div>
    )
}
