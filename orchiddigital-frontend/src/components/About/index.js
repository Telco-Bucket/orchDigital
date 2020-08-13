import React from 'react'
import NavBar from "../Layout/NavBar"
import Footer from "../Layout/Footer"
import FirstScreen from "../About/FirstScreen"


export default function index() {
    return (
        <div>
           <NavBar/> 
           <FirstScreen/>

           <Footer/>
        </div>
    )
}
