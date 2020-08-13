import React from 'react';
import NavBar from "../NavBar"
import "../Home/home-styles.css"
import FirstScreen from "../Home/FirstScreen"
import Services from "../Home/Services"
import Partners from "../Home/Partners"
import Footer from '../Home/Footer'

export default function Index() {
    return (
        <>
        <NavBar/>
        <FirstScreen/>
        <Services/>
        <Partners/>
        <Footer/>
        </>
    )
}
