import React from 'react'
import Footer from '../Layout/Footer'
import NavBar from '../Layout/NavBar'
import NavBarsm from '../Layout/NavBarsm'
import FirstScreen from './FirstScreen'
import Services from '../Services/Services'
import Buttons from "../Layout/Buttons"
import Contact from '../Layout/contact'

export default function index() {
    return (
        <div>
            <NavBarsm/>
            <NavBar/>
            <FirstScreen/>
            <Services/>
            <div className="text-center m-0 py-5" style={{background:"#e5e5e5"}}> <Buttons/></div>
           <Contact/>
            <Footer/>
        </div>
    )
}
