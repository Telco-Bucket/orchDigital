import React from 'react'
import Background from "../../Images/bg/bg.jpg"
export default function About() {
    
      
    return (
        <div id="about" style={{background:"#e5e5e5"}}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h1 style={{fontSize:"35px"}}>About Us</h1>
                <div style={{fontSize:"25px", fontWeight:"lighter"}}>
Orchiddigital Consulting Limited has been in operation, invented measures to eradicate poverty, halt the increment of unemployment, promote job creation through starts-up of new business and also alleviate business failure by helping existing businesses grow.
Orchiddigital Consulting Limited is the part of the strategy to hand-hold entrepreneurs through a tried and tested education process resulting in stronger sustainable business growth.
</div>
                
              </div>
            </div>
            <div className="col-xs-12 col-md-6 bg-white mt-3 pb-5">
            <h3>OUR ENGAGAEMENT APPROACH</h3>
                <div className="h3 u" style={{fontSize:"22px", fontWeight:"lighter"}}>Specifically, Orchiddigital facilitates the achievement of the following outcomes:</div>
                <div className="list-style">
                    <ul className="list-style h4" style={{fontSize:"20px", fontWeight:"lighter"}}>
                     <li><i className="fa fa-pencil"></i>Develop entrepreneurial skills of individuals to successfully start, manage, diversify and expand business enterprises
</li>  
<br/>
<li > <i className="fa fa-pencil"></i>Facilitate easy access to Start-up Capital for successful participants, especially funds from commercial banks, microfinance banks, allied financial institutions, Non-Governmental Organizations and other development agencies.</li>
 <br/>
 <li><i className="fa fa-pencil"></i>Generate employment opportunities through entrepreneurship, for Nigerians in-line with the agenda of the Federal Government and the goals of National Economic Empowerment and Development Strategy (NEEDS).</li>
 <br/>
 <li><i className="fa fa-pencil"></i>Support certified participants with strong entrepreneurship ecosystem that helps them realize their aspirations of starting or expanding their enterprises.
</li>
 </ul>
           </div>   
               </div>

               <div className="col-xs-12 col-md-6 bg-success text-white mt-3 pb-5">
                 <div className="h2" style={{fontSize:"22px", fontWeight:"lighter"}}>
                   ACCOMPLISHMENT PLANS
                 </div>
               <div className="h4" style={{fontSize:"20px", fontWeight:"lighter"}}>
                  To accomplish this mandate, participants are put through our ONE week long entrepreneurship development program, where we operate online and physical classroom training engagement model. We make the ‘Learning by Doing’ maxim in our development approach, and even our training follows the experiential learning methodology. Orchiddigital Consulting Limited engage aspiring and existing entrepreneurs, regardless of level of education, gender or socio-economic status. Only criteria is for participants to be 18yrs & above.
                  </div>
              
              </div>
          </div>
        </div>
      </div>
    )
  
}


