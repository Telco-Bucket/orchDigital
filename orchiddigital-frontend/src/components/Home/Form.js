import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import contactbg from "../../Images/contactbg.svg"
const Form= () => {
return (

    <section className="float-righ"style={{backgroundImage: `url(${contactbg})`}}>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form className="mt-5">
        <h1 className="h1 text-center mb-4">Contact Us</h1>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput style={{height:"60px"}} label="Message" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" />
          </div>
        <div className="text-left">
          <MDBBtn > <button id="btn-start"  className="btn-start m-sm-1 m-xl-1 btn btn-start h6 " style={{width:"193px", height:"62px", border:"1px solid white", color:"white", background:"#3F3D56" }}>Submit</button>
</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</section>
);
};

export default Form;