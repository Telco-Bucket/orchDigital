import React from 'react'

export default function Piece(props) {
    return (
        <section style={{height:'90px', textAlign:"center", backgroundColor:props.bg?props.bg:"white"}}>
        <h1>{props.text}</h1>
        </section>
    )
}
