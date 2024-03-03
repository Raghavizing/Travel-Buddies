import React from "react";
import "./Home.css"
import Typed from 'react-typed';
import Form from "./Form/Form";
import Testimonials from "./Testimonials/Testimonials";
const Home = () => {
    return (<div className="blueBackground"><div className="headerBody p-0">
        <div className="headerContent">
            <div className="row headerContent1">
            <div className="row col-lg-6 col-12 text-center text-lg-start my-auto">
                <span className="textLine1 d-block col-lg-11 ms-auto heading-text">Our Packages</span>
                <span className="textLine2 d-block col-lg-11 ms-auto heading-text">Search Your <Typed className="typedText"
                    strings={['Perfect Destination.', 'Next Adventure.', 'Dream Getaway.', 'Travel Bliss.']}
                    typeSpeed={60} backSpeed={60} loop
                /></span>
            </div>
            <div className="col-lg-6 col-12 text-center">
            <img className="headerImage" src="https://png.pngtree.com/png-clipart/20220123/original/pngtree-vector-hand-drawn-travel-family-vacation-travel-png-image_7164365.png" alt="" />
            </div>
            </div>
            <Form />
        </div>
    </div>
        <Testimonials />
    </div>)
}
export default Home
