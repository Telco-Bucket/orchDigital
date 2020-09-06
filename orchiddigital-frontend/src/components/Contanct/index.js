import React, { Component } from 'react'
import Map from "../Contanct/Map"
import NavBar from '../../components/Layout/NavBar';
import Contact from '../Layout/contact';
import JsonData  from "../../data/data.json"
import Footer from "../Layout/Footer"
import NavBarsm from '../Layout/NavBarsm';

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
    
      render() {
        return (
          <div style={{background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 90%)"}}>
              <NavBarsm/>
            <NavBar />
            <Contact data={this.state.landingPageData.Contact} />
           <Map/>
          
            <Footer/>
          </div>
        )
      }
    }


    
