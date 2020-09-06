import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center" style={{background:"#e6e6e6"}}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-12 col-sm-6 team text-center">



<div className="card" style={{width:"28em"}}>
  <img className="card-img-top" src={d.img} alt="Card image cap"/>
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
        </div>
      </div>
    );
  }
}

export default Team;
