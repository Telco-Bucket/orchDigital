import React from 'react'
import "../Layout/button.css"

export default function Button(props) {
    
    return (
        <div>
             <button id="btn-start" type={props.Type}   className="btn-start w-75 m-sm-1 m-xl-1 btn btn-start h1 " style={{maxWidth:props.maxWidth, height:"62px", border:"1px solid white", color:"white", background:"#3F3D56" }}>{props.Text}</button>
        </div>
    )
}
