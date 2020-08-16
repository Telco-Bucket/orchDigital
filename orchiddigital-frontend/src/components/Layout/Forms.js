import React, { Component } from 'react'
// import axios from "axios"
import Button from "../Layout/Button"

export default class Form extends Component {
   
    constructor(props){
        let Title=props.Title
        let showPurpose=props.showPurpose
        let purpose=props.purpose
        super(props);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePurpose=this.onChangePurpose.bind(this);
        this.onChangePhoneNumber=this.onChangePhoneNumber.bind(this);
        this.onChangeMessage=this.onChangeMessage.bind(this);
        this.onSubmit =this.onSubmit.bind(this)
        this.state={
           name:"",
            email:"",
            phoneNumber:"",
            message:"",
            purpose:purpose,
            Title:Title,
            showPurpose:showPurpose

        }

    }

   
    
    onChangeName(e){
         this.setState({
             name:e.target.value
         })
    }
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
        
   }
   onChangePurpose(e){
    this.setState({
        purpose:e.target.value
    })
    
}

   onChangePhoneNumber(e){
    this.setState({
        phoneNumber:e.target.value
    })
    
    
}
onChangeMessage(e){
    this.setState({
        message:e.target.value
    })
    
    
}
onSubmit(e){
    e.preventDefault()

    console.log(`Form Submitted`);
    console.log(`name : ${this.state.name}`);
    console.log(`emial: ${this.state.email}`);
    console.log(`phone number : ${this.state.phoneNumber}`);
    console.log(`message : ${this.state.message}`);



    this.setState({
        name:"",
        email:"",
        phoneNumber:"",
        message:""

    })

}

    render() {
        let Style={
            marginToop: '10px',
        background: '#FFF',
        "WebkitBoxShadow": '0px 4px 8px rgba(0, 0, 0, 0.05)',
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
        borderRadius: "5px",
        padding: "20px",
        maxWidth: "400px"
        }
        return (
        <div className="container mt-1" >

            <h5 className='container'>{this.state.Title}</h5>
            <form className="container" onSubmit={this.onSubmit} style={Style}>
            <div className="form-grou" style={{display:this.state.showPurpose}}>
                    
                    <input type="text"
                     className="form-control"
                     value={this.state.purpose}
                     onChange={this.onChangePurpose}
                     disabled
                     />
                     
                </div>
                <div className="form-group">
                    <label>Name </label>
                    <input type="text"
                     className="form-control"
                     value={this.state.name}
                     onChange={this.onChangeName}
                     required/>
                </div>
               

                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                     className="form-control"
                     value={this.state.email}
                     onChange={this.onChangeEmail}
                     required/>
                </div>


                <div className="form-group">
                    <label>Phone Number (optional)</label>
                    <input type="number"
                     className="form-control"
                     value={this.state.phoneNumber}
                     onChange={this.onChangePhoneNumber}/>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea type="text"
                     className="form-control"
                     value={this.state.message}
                     onChange={this.onChangeMessage}
                     required/>
                </div>
               
            
                <div className="form-group">
                
                <Button Type="submit" Text="Submit"  maxWidth="200px"/>

            </div>

           
            </form>
        </div>
        )
    }
}