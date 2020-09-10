import React, { Component } from 'react'

import HomeScreen from '../Home/HomeScreen';
import NavBar from '../../components/Layout/NavBar';
import NavBarsm from '../../components/Layout/NavBarsm';
import Header from '../Home/header';
import Features from './features';
import About from '../about';
import Services from '../Home/services';
import Gallery from '../Home/gallery';
import Testimonials from '../Home/testimonials';
import Team from '../Home/Team';
import Contact from '../Layout/contact';
import JsonData  from "../../data/data.json"
import Footer from "../Layout/Footer"
import { Partners } from './Partners';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";



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
         

          <div>
             
            
               <NavBarsm />
            <NavBar />
            <HomeScreen data={this.state.landingPageData.HomeScreen}/>
          
            <Services data={this.state.landingPageData.Services} />
            
            <About data={this.state.landingPageData.About} />
         
            <Partners/>
           <Testimonials data={this.state.landingPageData.Testimonials}/>
          
            <Contact data={this.state.landingPageData.Contact} />
            <Footer/>
         

</div>
        )
      }
    }


    