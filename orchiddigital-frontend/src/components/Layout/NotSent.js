import React from 'react'
import NavBarsm from './NavBarsm'
import NavBar from './NavBar'
import Footer from './Footer'


export default function NotSent() {
    return (
        <>
        <NavBarsm/>
        <NavBar/>
        <div className="pb5">
            <div className="text-center text-primary pt-5" style={{height:"60vh", background:"#f6f6f6", paddingBottom:"60px"}}>
         <section style={{height:"100px"}}></section>
         <div className="p-5" style={{ width:"60vw", background:"white", marginLeft:"20vw", marginBottom:"100px"}}>
         <i className="fa fa-question" style={{fontSize:"100px"}}></i>
            <section className="h5">
           The Server is temporary unavailable due to maintenance, please kindly check back shortly!!!
            

            </section>
            </div>
           
        </div>
        <section style={{height:"100px", background:"#f6f6f6"}}></section>
        </div>
        <Footer/>
        </>
    )
}
