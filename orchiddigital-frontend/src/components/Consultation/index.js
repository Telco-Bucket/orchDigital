import React from 'react'
import NavBarsm from '../Layout/NavBarsm'
import NavBar from '../Layout/NavBar'
import Footer from '../Layout/Footer'
import { ConsultForm } from './ConsultForm'

export default function index() {
    return (
        <div>
            <NavBarsm/>
            <NavBar/>
            <ConsultForm/>
            <Footer/>
            
        </div>
    )
}
