import React from 'react'
import background from "../../Images/parnersbg.svg";
import pind from "../../Images/partnersLogo/pind.svg"
import rosabon from "../../Images/partnersLogo/rosabon.svg"
import allianz from "../../Images/partnersLogo/allianz.svg"
import "../Home/swing.css"


export default function Partners() {
    return (
        <div className="text-center">
            <div style={{ display:"grid", gridTemplateColumns:"1fr", alignItems:"center"}}>
            
            <div>
                <div className=" partners-height" style={{backgroundImage: `url(${background})`}}>
                   <h1 className="h2 support mt-5 pt-3">Our Partners</h1>
<section id="partners-grid">
<div className="m-2 swing">
    <img src={pind} alt=""/>

</div>

<div className="m-2 swing">
    <img src={rosabon} alt=""/>

</div>

<div className="m-2 swing">
    <img src={allianz} alt=""/>

</div>
</section>
</div>


    


    


                         
            </div>
            </div>
        </div>
    )
}
