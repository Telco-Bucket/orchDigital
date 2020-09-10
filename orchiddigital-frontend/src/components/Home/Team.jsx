import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center row" style={{background:"#e6e6e6"}}>
        <div className="col-12">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="ro" className="container-fluid" >
            <div className="col-12">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="m-5 team text-center col-lg-2 col-md-3 col-sm-6 col-xs-12">



<div className="card " style={{maxWidth:"70vw"}}>
  <img className="card-img-top rounded-circle" style={{width:"100%", height:"280px"}} src={d.img} alt="Card image cap"/>
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
      </div>
    );
  }
}

export default Team;
