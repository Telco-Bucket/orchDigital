import React, { Component } from "react";


export class Mission extends Component {
  render() {
    return (
      <div id="team" className="text-center" style={{background:"#5ca9fb", color:"white"}}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2 style={{fontSize:"30px", fontWeight:"lighter"}}>MISSION AND VISION</h2>
            
          </div>
          <div id="row">
          
                  <div   className="col-md-6 col-sm-6 ">
                    <div className="thumbnail">
                      {" "}
                      <h3 style={{fontSize:"22px", fontWeight:"lighter"}}>Our Mission</h3>
                      <div className="caption text-white" >
                        <h4 className='text-white' style={{fontSize:"20px", fontWeight:"lighter"}}> To promote the production of affordable nutritious, safe and accessible foods and agricultural products ensuring sustainable management of natural resources enhancing market access for the entire agricultural sector, contributions towards reduction of poverty and hunger, to maintain top organizations.</h4>
                       
                      </div>
                    </div>
                  </div>
                 
                  
                  <div   className="col-md-6 col-sm-6 ">
                    <div className="thumbnail">
                      {" "}
                      <h3 style={{fontSize:"22px", fontWeight:"lighter"}}>Our Vision</h3>
                      <div className="caption">
                        <h4 className="text-white" style={{fontSize:"20px", fontWeight:"lighter"}}> To improve rural livelihoods and sustainable food system in the globe and sustainable e-commerce eco-system..</h4>
                       
                      </div>
                    </div>
                  </div>
                  
           
          </div>
        </div>
      </div>
    );
  }
}

export default Mission;
