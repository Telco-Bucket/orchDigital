import React, { Component } from 'react'
import Buttons from "../Layout/Buttons"

export class Service extends Component {
  render() {
    return (
        <div id="about" style={{background:"#e5e5e5"}}>
        <div className="container">

        <div className="row">
           
            <div className="col-xs-12 col-md-6">
              <div  className="about-text">
                <div id="erp" style={{height:"100px"}}></div>
                <h2>ENTERPRISE MANAGEMENT SOFTWARE DEVELOPMENT/MAINTENANCE:</h2>
                
                <div className="list-style">
                  <div className="h3 col-xs-12 font-weight-lighter">
                   Enterprise management software development/maintenance is a software that builds and re-engineers solution to cover the needs of large organization.. We work with:    
                   <ul>
                       <li>Enterprise resource planning (ERP) software,</li>
                       <li>Financial Management,   </li>
                       <li>Sales and Marketing,   </li>
                       <li>Purchasing,        </li>
                       <li>Inventory Management,   </li>
                       <li>Client relationship management (CRM) system </li>
                       <li>Contact Management, </li>
                       <li>Reporting,</li>
                       <li>E-mail Tracking,</li>
                       <li>Social Media Management, </li>
                       <li>Enterprise Supply Chain Management Software,</li>
                       <li>Order Management,</li>
                       <li>Return Management,</li>
                       <li>Fore Casting,</li>
                       <li>Inventory Management,</li>
                       <li>Human Resource Management (HRM)App;</li>
                       <li>Online Training,</li>
                       <li>Security,</li>
                       <li>Engagement Management System,</li>
                       <li>Budgeting,</li>
                       <li>Building And Invoicing,</li>
                       <li>Fixed Assets,</li>
                       <li>Inventory Management</li>
                </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6"> 
            <img src="img/about.jpg" className="img-responsive" alt=""/>
             </div>
          </div>



          <div className="row">
            <div className="col-xs-12 col-md-6"> 
            <img src="img/about.jpg" className="img-responsive" alt=""/>
             </div>
           
             <div id="entrepreneurship" style={{height:"100px"}}></div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>ENTREPRENUERSHIP TRAINING: </h2>
                
                <div className="list-style">
                  <div className=" col-xs-12 h2 font-weight-lighter">
                  It is a training scheme to develop persons for self employment or for organizing, financing and managing new ventures or businesses.
                  <p><Buttons/></p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-xs-12 col-md-6">
              <div className="about-text">
              <div id="agro_consulting" style={{height:"100px"}}></div>
                <h2>AGRO CONSULTING: </h2>
                
                <div className="list-style">
                  <div className=" col-xs-12 h2 font-weight-lighter">
                   We specialize in advising, provide technical, commercial and financial advice and information to farming, agricultural and public sector.   <p><Buttons/></p>
                  </div>
                </div>
              </div>
            </div>


          </div>




          <div className="row">
           
           <div className="col-xs-12 col-md-6">
             <div className="about-text">
             <div id="access_to_finance" style={{height:"100px"}}></div>
               <h2>ACCESS TO FINANCE:</h2>
               
               <div className="list-style">
                 <div className=" col-xs-12 h2 font-weight-lighter">
                 We provide financial services through commercial banks private financial institution, CBN NIRSAL MFB, CBN Microfinance for start ups and expanding business dedicated to support both on-off farm agricultural activities and businesses.   </div>
               </div>
             </div>

             
           </div>

           <div className="col-xs-12 col-md-6">
             <div className="about-text">
             <div id="tax_audit" style={{height:"100px"}}></div>
               <h2>   INSURANCE /AUDIT AND TAX CLEARANCE:</h2>
               
               <div className="list-style">
                 <div className=" col-xs-12 h2 font-weight-lighter">
                We provide farmers with financial protection against production posses caused by natural persils such as diseases, frost, wind, wildlife, excessive moisture, hail, and other naturaal disasters.  </div>
               </div>
             </div>

             
           </div>
           <div className="col-xs-12 col-md-6">
           <div id="access_to_market" style={{height:"100px"}}></div>
             <div className="about-text">
               <h2>   ACCESS TO MARKET:</h2>
               
               <div className="list-style">
                 <div className=" col-xs-12 h2 font-weight-lighter">
                  We connect bulk purchasers for your products and services, we sell your goods and services across borders and enter foreign markets.              </div>
               </div>
             </div>

             
           </div>

    

           <div className="col-xs-12 col-md-6"> 
           <img src="img/about.jpg" className="img-responsive" alt=""/>
            </div>
         </div>







         <div className="row">
         <div className="col-xs-12 col-md-6">
         <div id="export_raw_materials" style={{height:"100px"}}></div>
             <div className="about-text">
               <h2>   EXPORT OF RAW MATERIALS:</h2>
               
               <div className="list-style">
                 <div className=" col-xs-12 h2 font-weight-lighter">
                  We move goods and services from the country to other countries to be purchased.
                 </div>  </div>
             </div>

             
           </div>




           <div className="col-xs-12 col-md-6">
           <div id="fac_management" style={{height:"100px"}}></div>
             <div className="about-text">
               <h2>  FACILITY MANAGEMENT:</h2>
               
               <div className="list-style">
                 <div className=" col-xs-12 h2 font-weight-lighter">
                  We co-ordinate everything that keeps a business; physical buildings, systems and assets running.
                 </div>  </div>
             </div>

             
           </div>
         

          
         

    

           
         </div>

        </div>
        
      </div>
    )
  }
}

export default Service





