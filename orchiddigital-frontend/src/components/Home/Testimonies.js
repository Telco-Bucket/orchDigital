import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Styles.css";
import user from '../../Images/Testimony/first.svg'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

export default function Testimonies() {
    
    return (
        <section className="text-center mb-5 pb-5 pt-3 mt-3" style={{backgroundColor:"rgb(241, 241, 241)"}}>
       
        <div className="App" style={{display:"grid", gridTemplateColumns:"1fr"}}>
        <h3>Testimonials</h3>
      <Carousel breakPoints={breakPoints}>
      <Item>
        <div className="card " style={{width: "18rem"}}>
            <div className="card-header" >
<img className="card-img-top rounded-circle" style={{width:'50px', height:"50px"}} src={user} alt="Card image cap"/>
</div>
  <div className="card-body">
    <h5 className="card-title">John Doe</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
  </div>
</div>
        </Item>
        <Item>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-header">
<img className="card-img-top rounded-circle" style={{width:'50px', height:"50px"}} src={user} alt="Card image cap"/>
</div>
  <div className="card-body">
    <h5 className="card-title">John Doe</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
  </div>
</div>
        </Item>
        <Item>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-header">
<img className="card-img-top rounded-circle" style={{width:'50px', height:"50px"}} src={user} alt="Card image cap"/>
</div>
  <div className="card-body">
    <h5 className="card-title">John Doe</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
  </div>
</div>
        </Item>
        <Item>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-header">
<img className="card-img-top rounded-circle" style={{width:'50px', height:"50px"}} src={user} alt="Card image cap"/>
</div>
  <div className="card-body">
    <h5 className="card-title">John Doe</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
  </div>
</div>
        </Item>

        <Item>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-header">
<img className="card-img-top rounded-circle" style={{width:'50px', height:"50px"}} src={user} alt="Card image cap"/>
</div>
  <div className="card-body">
    <h5 className="card-title">John Doe</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
  </div>
</div>
        </Item>

        <Item>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-header">
<img className="card-img-top rounded-circle" style={{width:'50px', height:"50px"}} src={user} alt="Card image cap"/>
</div>
  <div className="card-body">
    <h5 className="card-title">John Doe</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    
  </div>
</div>
        </Item>
      </Carousel>
    </div>
    </section>
    )
}


// import React from "react";
// import ReactDOM from "react-dom";
// import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./styles.css";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 }
// ];

// function App() {
//   return (
//     <div className="App">
//       <Carousel breakPoints={breakPoints}>
//         <Item>1</Item>
//         <Item>2</Item>
//         <Item>3</Item>
//         <Item>4</Item>
//         <Item>5</Item>
//         <Item>6</Item>
//         <Item>7</Item>
//         <Item>8</Item>
//       </Carousel>
//     </div>
//   );
// }
