import React, { Component } from 'react'
import Footer from '../Layout/Footer'
import NavBar from '../Layout/NavBar'
import NavBarsm from '../Layout/NavBarsm'
import FirstScreen from './FirstScreen'
import Services from '../Services/Services'
import Buttons from "../Layout/Buttons"
import Contact from '../Layout/contact'
import JsonData  from "../../data/data.json"

export default class index extends Component {
    state = {
        landingPageData: {},
      }
      getlandingPageData() {
        this.setState({landingPageData : JsonData})
      }
    
      componentDidMount() {
        this.getlandingPageData();
      }
    render(){
    return (
        <div>
            <NavBarsm/>
            <NavBar/>
            <FirstScreen/>
            <Services/>
            <div className="text-center m-0 py-5" style={{background:"#e5e5e5"}}> <Buttons/></div>
           <Contact data={this.state.landingPageData.Contact}/>
            <Footer/>
        </div>
    )
}
}
