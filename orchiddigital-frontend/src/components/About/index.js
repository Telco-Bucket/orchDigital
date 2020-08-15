import React from 'react'
import NavBar from "../Layout/NavBar"
import Footer from "../Layout/Footer"
import FirstScreen from "../About/FirstScreen"
import Button from "../Layout/Button"
import Space from '../Home/Piece'


export default function index() {
    return (
        <div>
           <NavBar/> 
           <Space/>
           <FirstScreen/>
            <Button/>
           <Footer/>
        </div>
    )
}
