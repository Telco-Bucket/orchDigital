import React from 'react'
import Form from '../Layout/Forms'
import bg from "../../Images/contactbg.svg"
import Space from "../Home/Piece"
export default function ContactForm() {
    return (
        <div className="container" style={{backgroundImage: `url(${bg})`, backgroundRepeat:"no-repeat", maxWidth:"97vw", paddingTop:"50px"}}>
            
            <section style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
            <h1 className="d-xl-block d-lg-block d-md-none d-sm-none"></h1>
            <section className='container' style={{backgroundColor:"#F6F6F6", maxWidth:"450px",}}>
            <Form showPurpose="none"/>
            </section>
            </section>
            
        </div>
    )
}
