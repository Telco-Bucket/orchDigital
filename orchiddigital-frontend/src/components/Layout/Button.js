import React from 'react'
import "../Layout/button.css"

export default function Button(props) {
    
    return (
        <div>
             <input id="btn-start" type={props.Type} value={props.Text}  className="btn-start m-sm-1 m-xl-1 btn btn-start h1 " style={{width:"193px", height:"62px", border:"1px solid white", color:"white", background:"#3F3D56" }}/>
        </div>
    )
}
