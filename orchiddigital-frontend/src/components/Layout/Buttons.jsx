import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttons() {
    return (
        <div>
           <Link to ="/consultus">  <button type="submit" className="btn btn-custom btn-lg p-2" style={{color:"white !important"}}>
                Book A Consultation
                  </button>
                  </Link>
                  <Link to="/apply"><button className="btn btn-custom btn-lg text-dark p-2" style={{background:"white", color:"blue !important", border:"1px solid blue", margin:"5px"}} >Enroll Today</button></Link>

        </div>
    )
}
