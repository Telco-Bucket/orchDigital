import React from 'react'
import ApplicationForm from './Application_Form'
import Footer from '../Layout/Footer'
import NavBarsm from '../Layout/NavBarsm'
import NavBar from '../Layout/NavBar'

export default function index() {
    return (
        <div>
            <NavBarsm/>
            <NavBar/>
           <ApplicationForm/>
           <Footer/> 
        </div>
    )
}
