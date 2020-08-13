import React,{useEffect} from 'react';
import NavBar from "../Layout/NavBar"
import "../Home/home-styles.css"
import FirstScreen from "../Home/FirstScreen"
import Services from "../Home/Services"
import Partners from "../Home/Partners"
import Footer from '../Layout/Footer'
import AOS from  'aos'
 

export default function Index() {
    useEffect(() => {
        
        return () => {
            AOS.init({
                // initialise with other settings
                // duration : 2000
                
              });
            //   AOS.refresh();
        }
    }    )
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
