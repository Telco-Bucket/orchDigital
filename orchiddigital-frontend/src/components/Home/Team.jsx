import React, { Component } from "react";
import Zoom from 'react-reveal/Zoom';

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center row" style={{background:"#f6f6f6"}}>
        <div className="col-11">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            
          </div>
         
          <div id="ro" className="col-md-10 col-md-offset-2 section-title" >
             <Zoom>
            <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className=" my-3 col-md-3">



<div className="card "  style={{minHeight:"300px"}}>
  <img className="card-img-top " src={d.img} alt="Card image cap"/>
  <div className="card-body">
  
    <h4>{d.name}</h4>
     <p>{d.job}</p>
     </div>
  </div>


{/* 
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" style={{height:"200px"}}/>
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div> */}
                  </div>
                ))
              : "loading..."}
          </div>
          </Zoom>
        </div>
       
        </div>
      </div>
    );
  }
}

export default Team;
