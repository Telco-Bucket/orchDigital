import React from 'react'

export default function Map() {
    return (
        <div className="text-center" style={{marginTop:"15vh", backgroundColor:"#F6F6F6"}}>
            <h3 className="h3">Locate Us Today</h3>           
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9903.026403123324!2d7.052250044154737!3d4.824399335772896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd0f23f1d025%3A0x9a8115c76bd2ec6c!2sWoji%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1597355647863!5m2!1sen!2sng"  frameBorder="0" style={{border:0,width:'95vw', height:"80vh"}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Our Location"></iframe>
        </div>
    )
}
