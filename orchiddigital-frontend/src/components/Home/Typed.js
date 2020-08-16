import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
import Button from "../Layout/Button"

class Typing extends Component {
    render() {
        return (
            <div className="text-center bg-black text-white " style={{width:"99vw", height:"150px", backgroundColor:"rgba(63, 61, 86, 0.9)"}}>
              <div className="pt-5 h2"> We are <Typed
                    strings={[' Trusted','  Sustainable', "Reliable", "Transparent"]}
                    typeSpeed={40}
                    loop
                />
                </div>
                <br/>

                {/* <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed> */}
                <Button Text="Try Us Today"/>
            </div>
        );
    }
}

export default Typing