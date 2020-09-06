import React,{Component} from 'react'
import NavBar from '../Layout/NavBar'
import Footer from '../Layout/Footer'
import Partners from '../Home/Partners'
import Buttons from '../Layout/Buttons'
import Mission from './Mission'
import NavBarsm from '../Layout/NavBarsm'
import About from "../about"
import Contact from '../Layout/contact'
import Team from '../Home/Team'
import JsonData  from "../../data/data.json"
import AboutSc from "./About"
export default class index  extends Component  {
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
            <NavBarsm/>
            <NavBar/>
            <AboutSc/>
            <About data={this.state.landingPageData.About} />
            <Mission/>
            <Partners/>
            <div className="text-center  py-5" style={{background:"#e5e5e5"}}> <Buttons/></div>
            <Team data={this.state.landingPageData.Team} />
            <Contact/>
           
            <Footer/>
        </div>
    )
      }
}
