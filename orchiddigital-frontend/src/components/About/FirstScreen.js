import React from 'react'
import aboutusbg from "../../Images/aboutusbg.svg"

export default function FirstScreen() {
    return (
        <div>
            <div className=" mt-sm-5 first" style={{backgroundImage: `url(${aboutusbg})`, height:"40vh" , width:"100vw", backgroundRepeat:"no-repeat"}}></div>
            <section className="h-25 w-100 text-center">
                <h1 className="h1">ABOUT US</h1>
                <h4 className="h4" style={{width:"50vw"}} className="text-center m-auto">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis id fuga, quo exercitationem labore animi quas fugit eum adipisci corporis possimus, veritatis dolorum consequuntur veniam sit delectus praesentium! Consequatur, odit.
</h4> 
<section className="container text-center pt-4 " style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap:"15px"}}>
<section>
    <h3>Our Mission</h3>
<div className="pt-2" style={{width:"40vw", background:"gray", color:"white"  }}>
Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
</div>
</section>
<section>
    <h3>Our Vision</h3>
<div className="pt-2" style={{width:"40vw", background:"gray", color:"white"  }}>
Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
</div>
</section>
</section>


            </section>
            
        </div>
    )
}
