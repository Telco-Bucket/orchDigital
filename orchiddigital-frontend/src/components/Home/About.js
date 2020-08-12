import React from 'react'
import about from "../../Images/about.svg"

export default function About() {
    return (
        <section id="about" >
        
        <div className="about-grid">
            <img src={about} class="about-img"/>
            <div style={{background: "#F6F6F6"}}>
                <h1 className="py-5">About</h1>
                <h2>Our Mission</h2>
            Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque
            <ul className="py-5">
                <li>Mission</li>
                <li>Vision</li>
            </ul>
            <button className="m-sm-1 m-xl-1 btn btn-success" style={{width:"193px", height:"72px", borderRadius:"0px" }}>More</button>
            </div>
            
        </div>
        </section>
    )
}
