import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export class ApplicationForm extends Component  { 

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    
    this.onChangeResidentAddress = this.onChangeResidentAddress.bind(this);
    this.onChangeResidentLGA = this.onChangeResidentLGA.bind(this);
    this.onChangeResidentState = this.onChangeResidentState.bind(this);
    this.onChangeResidentCountry = this.onChangeResidentCountry.bind(this);
    
    this.onChangeAge = this.onChangeAge.bind(this);
        
    this.onChangeMaritalStatus = this.onChangeMaritalStatus.bind(this);
    this.onChangeEducationLevel = this.onChangeEducationLevel.bind(this);
    this.onChangeOtherEducationLevel = this.onChangeOtherEducationLevel.bind(this);
    this.onChangeGraduationYear = this.onChangeGraduationYear.bind(this);
    this.onChangeSpokenLanguage = this.onChangeSpokenLanguage.bind(this);
    this.onChangeOtherSpokenLanguage = this.onChangeOtherSpokenLanguage.bind(this);
    
    this.onChangeMobilePhoneUse = this.onChangeMobilePhoneUse.bind(this);
    this.onChangeComputerUse = this.onChangeComputerUse.bind(this);
    this.onChangeOtherSoftwarerUse = this.onChangeOtherSoftwarerUse.bind(this);
   
    this.onChangePresentEmployment = this.onChangePresentEmployment.bind(this);
    this.onChangeOtherSpecifyEmployment = this.onChangeOtherSpecifyEmployment.bind(this);
    this.onChangeWorkExperience = this.onChangeWorkExperience.bind(this);
    
    this.onChangeOwnBankAccount = this.onChangeOwnBankAccount.bind(this); 
    this.onChangeOwnBusinessAccount = this.onChangeOwnBusinessAccount.bind(this);
    this.onChangeATM = this.onChangeATM.bind(this);
    this.onChangeBranch = this.onChangeBranch.bind(this);
    this.onChangePOS = this.onChangePOS.bind(this); 
    this.onChangeInternet = this.onChangeInternet.bind(this);
    this.onChangeMobileApp = this.onChangeMobileApp.bind(this);
   
    this.onChangeLoanReception= this.onChangeLoanReception.bind(this);
    this.onChangeRefferedBy = this.onChangeRefferedBy.bind(this); 
    this.onChangePassport = this.onChangePassport.bind(this);
   
   
    
    
    
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      gender: '',
      age_range: '',
      phone_number:'',
      email:"",
      resident_address:"",
      resident_lga:"",
      resident_state:"",
      resident_country:"",
      age_range: "",
      education_level: "",
      other_education_level:"",
      graduation_year:"",
      spoken_language: "",
      other_spoken_language: "",
      mobile_phone_use:"",
      computer_use:"",
      other_software_use:"",
      present_employment: "",
      specify_employment:"",
      working_experience:"",
      own_bank_account: "",
      own_business_account:"",
      branch: "",
      atm:"",
      pos:"",
      internet:"",
      mobile_app:"",
      loan_reception_status: "",
      reffered_by:"",
      applicant_passport: "",
    


       
        isSuccess:false,
        isServerDown:false
     
    }
}

onChangeName(e) {
  this.setState({
      name: e.target.value
  });
}

onChangeGender(e) {
    this.setState({
        gender: e.target.value
    });
}

onChangePhoneNumber(e) {
    this.setState({
        phone_number: e.target.value
    });
}

onChangeEmail(e) {
  this.setState({
      email: e.target.value
  });
}



onChangeResidentAddress(e) {
  this.setState({
      resident_address: e.target.value
  });
}


onChangeResidentLGA(e) {
  this.setState({
      resident_lga: e.target.value
  });
}

onChangeResidentState(e) {
  this.setState({
      resident_state: e.target.value
  });
}
onChangeResidentCountry(e) {
  this.setState({
      resident_country: e.target.value
  });
}

onChangeMaritalStatus(e) {
  this.setState({
      marital_status: e.target.value
  });
}
onChangeAge(e) {
  this.setState({
      age_range: e.target.value
  });
}

onChangeEducationLevel(e) {
  this.setState({
      education_level: e.target.value
  });
}


onChangeOtherEducationLevel(e) {
  this.setState({
      other_education_level: e.target.value
  });
}

onChangeGraduationYear(e) {
  this.setState({
    graduation_year: e.target.value
  });
}


onChangeSpokenLanguage(e) {
  this.setState({
    spoken_language: e.target.value
  });
}
onChangeOtherSpokenLanguage(e) {
  this.setState({
    other_spoken_language: e.target.value
  });
}



onChangeMobilePhoneUse(e) {
  this.setState({
    mobile_phone_use: e.target.value
  });
}


onChangeComputerUse(e) {
  this.setState({
    computer_use: e.target.value
  });
}


onChangeOtherSoftwarerUse(e) {
  this.setState({
    other_software_use: e.target.value
  });
}

onChangePresentEmployment(e) {
  this.setState({
    present_employment: e.target.value
  });
}

onChangeOtherSpecifyEmployment(e) {
  this.setState({
    specify_employment: e.target.value
  });
}


onChangeWorkExperience(e) {
  this.setState({
    working_experience: e.target.value
  });
}

onChangeOwnBankAccount(e) {
  this.setState({
    
    own_bank_account: e.target.checked&&e.target.value
  });
}

onChangeOwnBusinessAccount(e) {
  this.setState({
    own_business_account: e.target.checked&&e.target.value
  });
}

onChangeBranch(e) {
  this.setState({
    branch: e.target.checked&&e.target.value
  });
}

onChangeATM(e) {
  this.setState({
    atm: e.target.checked&&e.target.value
  });
}
onChangePOS(e) {
  this.setState({
    pos: e.target.checked&&e.target.value
  });
}


onChangeInternet(e) {
  this.setState({
    internet:  e.target.checked&&e.target.value
  });
}
onChangeMobileApp(e) {
  this.setState({
    mobile_app:  e.target.checked&&e.target.value
  });
}

onChangeLoanReception(e) {
  this.setState({
    loan_reception_status: e.target.value
  });
}

onChangeRefferedBy(e) {
  this.setState({
    reffered_by: e.target.value
  });
}
onChangePassport(e) {
  this.setState({
    applicant_passport: e.target.value
  });
}



onSubmit(e) {
    e.preventDefault();
    
    console.log(`Form submitted:`);
    
    const newContact = {
    

      name: this.state.name,
      gender: this.state.gender,
      age_range: this.state.age_range,
      phone_number:this.state.phone_number,
      email:this.state.email,
      resident_address:this.state.resident_address,
      resident_lga:this.state.resident_lga,
      resident_state:this.state.resident_state,
      resident_country:this.state.resident_country,
      age_range: this.state.age_range,
      education_level: this.state.education_level,
      other_education_level:this.state.other_education_level,
      graduation_year:this.state.graduation_year,
      spoken_language: this.state.spoken_language,
      other_spoken_language: this.state.other_spoken_language,
      mobile_phone_use:this.state.mobile_phone_use,
      computer_use:this.state.computer_use,
      other_software_use:this.state.other_software_use,
      present_employment: this.state.present_employment,
      specify_employment:this.state.specify_employment,
      working_experience:this.state.working_experience,
      own_bank_account: this.state.own_bank_account,
      own_business_account:this.state.own_business_account,
      branch: this.state.branch,
      atm:this.state.atm,
      pos:this.state.pos,
      internet:this.state.internet,
      mobile_app:this.state.mobile_app,
      loan_reception_status: this.state.loan_reception_status,
      reffered_by:this.state.reffered_by,
      applicant_passport: this.state.applicant_passport,
     
       
    }

    axios.post('http://localhost:4001/apply/add', newContact)
        .then(res => { if(res.status===200){
          this.setState({isSuccess:true})
          console.log(res.data)
        }else if(res.status===503){
          this.setState({isServerDown:true})
        }});

    this.setState({
      name: '',
      gender: '',
      age_range: '',
      phone_number:'',
      email:"",
      resident_address:"",
      resident_lga:"",
      resident_state:"",
      resident_country:"",
      age_range: "",
      education_level: "",
      other_education_level:"",
      graduation_year:"",
      spoken_language: "",
      other_spoken_language: "",
      mobile_phone_use:"",
      computer_use:"",
      other_software_use:"",
      present_employment: "",
      specify_employment:"",
      working_experience:"",
      own_bank_account: "",
      own_business_account:"",
      branch: "",
      atm:"",
      pos:"",
      internet:"",
      mobile_app:"",
      loan_reception_status: "",
      reffered_by:"",
      applicant_passport: "",



    })
    
}
  render(){
    if(this.state.isSuccess){
      return <Redirect to= "/success"/>
    }else if(this.state.isServerDown){
      return <Redirect to="/serverdown"/>
    }
    return (
        <div  style={{ margin: "auto",
         
          
          paddingButtom: "5px"}}>
        <div id="contact">
          <div className="container">
            <div className="col-md-12">
              <div className="row">
                <div className="section-title">
                  <h2>APPLICATION FORM</h2>
                  <p>
                    Please fill out the form below to apply for our entrepreneurship program. 
                  </p>
                </div>
                <form name="sentMessage" id="contacForm" onSubmit={this.onSubmit}>
                  
                  <fieldset className="bg-light m-5 p-5">
                    <legend className="h1 bg-dark">SECTION ONE: BIO-DATA</legend>
                    <div className="row">
                  
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          value={this.state.name}
                          
                          onChange={this.onChangeName}
                          className="form-control"
                          placeholder="Surname/Other Names"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
               
  <div className="col-md-4">
                      <div className="form-group form-control">
                      <label>
         <span className="h3 bg-aqua">Select Gender</span>
          <select value={this.state.gender} onChange={this.onChangeGender} required style={{outline:"none", border:"none"}}>
          <option>-------</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            
          </select>
        </label>
                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group form-control">
                      <label>
         <span className="h3 bg-aqua">Marital Status</span>
          <select value={this.state.marital_status} onChange={this.onChangeMaritalStatus} required style={{outline:"none", border:"none"}}>
          <option>-------</option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="Divorced">Divorced</option>
            
          </select>
        </label>
                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>


                    <div className="col-md-4">
                      <div className="form-group form-control">
                      <label>
         <span className="h3 bg-aqua">Age Range</span>
          <select value={this.state.age_range} onChange={this.onChangeAge} required style={{outline:"none", border:"none"}}>
          <option >-------</option>
            <option value="18-25 years">18-25 years</option>
            <option value="25-36 years">25-36 years</option>
            <option value="36-45 years">36-45 years</option>
            <option value="above 45 years">Above 45 years</option>
            
          </select>
        </label>
                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>



                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="number"
                          id="name"
                          value={this.state.phone_number}
                          
                          onChange={this.onChangePhoneNumber}
                          className="form-control"
                          placeholder="Phone Number"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>


                    
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="email"
                          id="name"
                          value={this.state.email}
                          
                          onChange={this.onChangeEmail}
                          className="form-control"
                          placeholder="E-Mail Address"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>

<div className="col-md-4">
                    <div className="form-group">
                    <textarea
                      name="Resident"
                      id="message"
                      className="form-control"
                      rows="4"
                      value={this.state.resident_address}
                          
                          onChange={this.onChangeResidentAddress}
                      placeholder="Resident Address"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
</div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="ResidentLGA"
                          value={this.state.resident_lga}
                          
                          onChange={this.onChangeResidentLGA}
                          className="form-control"
                          placeholder="Resident L.G.A"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>



                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="ResidentState"
                          value={this.state.resident_state}
                          
                          onChange={this.onChangeResidentState}
                          className="form-control"
                          placeholder="Resident State"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>


                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="ResidentState"
                          value={this.state.resident_country}
                          
                          onChange={this.onChangeResidentCountry}
                          className="form-control"
                          placeholder="Country"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>



                    <div className="col-md-4">
                    <div className="h2 text-black-50">Passport</div>
                      <div className="form-group">
                       
                        <input

                          type="file"
                          id="name"
                          value={this.state.applicant_passport}
                          
                          onChange={this.onChangePassport}
                          className="form-control"
                         
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>


</div>
<br/>
<br/>

</fieldset>








<fieldset className="bg-light m-5 p-5">
                    <legend className="h1 bg-dark">SECTION TWO: LITERACY AND PROFICIENCY</legend>
                    <div className="row">
                    
               
  <div className="col-md-4">
                      <div className="form-group form-control">
                      <label>
         <span className="h3 bg-aqua">Educational Qualification</span>
          <select value={this.state.education_level} onChange={this.onChangeEducationLevel} required style={{outline:"none", border:"none"}}>
            
          <option >------</option>
            <option value="Primary & Secondary School">Primary & Secondary School</option>
            <option value="OND,NCE or Equivalent">OND,NCE or Equivalent</option>
            <option value="First Degree/HND">First Degree/HND</option>
            <option value="SecondDegree/HND">Second Degree/HND</option>
            <option value="Others">Others</option>
            
          </select>
        </label>
                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>



                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                         
                          value={this.state.other_education_level}
                          
                          onChange={this.onChangeOtherEducationLevel}
                          className="form-control"
                          placeholder="if others, please specify"
                         
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>



                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          value={this.state.graduation_year}
                          
                          onChange={this.onChangeGraduationYear}
                          className="form-control"
                          placeholder="Year of Graduation"
                         
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>




                    <div className="col-md-4">
                      <div className="form-group form-control">
                      <label>
         <span className="h3 bg-aqua">Language(Read and Write)</span>
          <select value={this.state.spoken_language} onChange={this.onChangeSpokenLanguage} required style={{outline:"none", border:"none"}}>
          <option>-------</option>
            <option value="Can Read and Write English">Can Read and Write English</option>
            <option value="Can not Read and Write English">Cannot Read and Write English</option>
            <option value="Other Languages">Other Languages</option>
           
            
          </select>
        </label>
                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>


                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                         
                          value={this.state.other_spoken_language}
                          
                          onChange={this.onChangeOtherSpokenLanguage}
                          className="form-control"
                          placeholder="If you selected other languages, please specify"
                         
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>

                    
                    <div className="col-md-4">
                      <div className="form-group form-control">
                      <label>
         <span className="h3 bg-aqua">Use of Mobile Phone</span>
          <select value={this.state.mobile_phone_use} onChange={this.onChangeMobilePhoneUse} required style={{outline:"none", border:"none"}}>
          <option>-------</option>
            <option value="Call only">Call only</option>
            <option value="Call & Text only">Call & Text only</option>
            <option value="Call, Text & Internet">Call, Text & Internet</option>
            <option value="Call, Text,Internet & Apps">Call, Text , Internet & Apps</option>
            
          </select>
        </label>
                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>



                    <div className="col-md-4">
                      <div className="form-group form-control">
                      <label>
         <span className="h3 bg-aqua">Use of Computer</span>
          <select value={this.state.computer_use} onChange={this.onChangeComputerUse} required style={{outline:"none", border:"none"}}>
          <option>-------</option>
            <option value="Don't use">Don't use</option>
            <option value="Windows, MSOffice, Internery">Windows, MSOffice, Interner</option>
            <option value="Call, Text & Internet">Call, Text & Internet</option>
            <option value="Other Software or Business App">Other Software or Business App</option>
            
          </select>
        </label>
                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>



                    
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          value={this.state.other_software_use}
                          
                          onChange={this.onChangeOtherSoftwarerUse}
                          className="form-control"
                          placeholder="Please specify if other softwares"
                         
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>


                   

                 


                  



                   


                    
                    


                






</div>
<br/>
<br/>

</fieldset>









<fieldset className="bg-light m-5 p-5">
                    <legend className="h1 bg-dark">SECTION THREE: WORKING EXPERIENCE</legend>
                    <div className="row">
                   
               
  <div className="col-md-4">
                      <div className="form-group form-control">
                      <label>
         <span className="h3 bg-aqua">Present Type of Employment</span>
          <select value={this.state.present_employment} onChange={this.onChangePresentEmployment} required style={{outline:"none", border:"none"}}>
          <option>-------</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Employed">Employed</option>
            
          </select>
        </label>
                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>



                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          value={this.state.specify_employment}
                          
                          onChange={this.onChangeOtherSpecifyEmployment}
                          className="form-control"
                          placeholder="If Employed, specify for private or public"
                          
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>




                    <div className="col-md-4">
                      <div className="form-group form-control">
                      <label>
         <span className="h3 bg-aqua">Years Of Working Experience</span>
          <select value={this.state.working_experience} onChange={this.onChangeWorkExperience} required style={{outline:"none", border:"none"}}>
          <option>-------</option>
            <option value="Less than 1 year">Less than 1 year</option>
            <option value="1-3 years">1-3 years</option>
            <option value="4-10 years">4-10 years</option>
            <option value="More than 10 years">More than 10 years</option>
          </select>
        </label>
                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>











               




</div>
<br/>
<br/>

</fieldset>








<fieldset className="bg-light m-5 p-5">
                    <legend className="h1 bg-dark">SECTION FOUR: FINANCIAL INCLUSION (Tick all relevant)</legend>
                    <div className="row">
                   
               
                    <div className="col-md-4 pb-5">
                      <div className="form-group form-control h-50 py-5">
                      <div className="text-black-50">  Banking Ststem</div> 
                      <label>
         Own personal Bank Account
          <input
            name="ownAccount"
            type="checkbox"
            checked={this.state.own_bank_account}
            onChange={this.onChangeOwnBankAccount} 
            value="Own a personal account"/>
        </label>


              
        <label>
         Own Seperate Bank Account For Business
          <input
            name="ownAccount"
            type="checkbox"
            checked={this.state.own_business_account}
            onChange={this.onChangeOwnBusinessAccount} 
            value="Own a Business account"/>
        </label>
        </div>
        </div>




  <div className="col-md-4 ">
                      <div className="form-group form-control h-50 py-5">
                      <div className="text-black-50">  Use of Banking Channel</div> 
                      <label>
          Branch
          <input
            name="branch"
            type="checkbox"
            checked={this.state.branch}
            onChange={this.onChangeBranch} 
            value="Branch"/>
        </label>
        <label>
          ATM
          <input
            name="atn"
            type="checkbox"
            checked={this.state.atm}
            onChange={this.onChangeATM} 
            value="ATM"/>
        </label>

        <label>
          Internet
          <input
            name="internet"
            type="checkbox"
            checked={this.state.internet}
            onChange={this.onChangeInternet} 
            value="Internet"/>
        </label>

        <label>
          Mobile App
          <input
            name="imobileApp"
            type="checkbox"
            checked={this.state.mobile_app}
            onChange={this.onChangeMobileApp} 
            value="Mobile App"/>
        </label>


        <label>
          POS
          <input
            name="POS"
            type="checkbox"
            checked={this.state.pos}
            onChange={this.onChangePOS} 
            value="POS"/>
        </label>
        <br />
        

                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>


                    <div className="col-md-4">
                      <div className="form-group form-control">
                      <label>
         <span className="h3 bg-aqua">Have Applied and received loan(s)</span>
          <select value={this.state.loan_reception_status} onChange={this.onChangeLoanReception} required style={{outline:"none", border:"none"}}>
          <option>-------</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
           
          </select>
        </label>
                        
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>



                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          value={this.state.reffered_by}
                          
                          onChange={this.onChangeRefferedBy}
                          className="form-control"
                          placeholder="Reffered by..."
                          
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>




                 











               




</div>
<br/>
<br/>

</fieldset>

<div className="container">
<div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg bg-blue w-50">
                    APPLY
                  </button>


                  </div>
                
                </form>
              </div>
            </div>
           </div>
              </div>
              </div>
    )
}
}




export default ApplicationForm
