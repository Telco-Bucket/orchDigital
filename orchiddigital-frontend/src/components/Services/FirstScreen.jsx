import React from 'react'
import bgg from "../../Images/bg/bg.jpg"

export default function FirstScreen() {
    return (
        <div className="text-center pt-5" style={{height:"200px", backgroundImage: `url(${bgg})`}}>
            <div className="pt-5">
            <h2 className="pt-5" style={{fontSize:"60px"}}>SERVICES</h2>
            </div>
           
        </div>
    )
}
