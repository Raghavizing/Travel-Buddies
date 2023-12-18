import React from "react";
import "./Home.css"
import Typed from 'react-typed';
import Form from "./Form/Form";
import Testimonials from "./Testimonials/Testimonials";
const Home = () => {
    return (<div><div className="headerBody p-0">
        <div className="headerBackground">
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Images/Home/1.jpeg" className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/Home/2.jpeg" className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/Home/3.jpeg" className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/Home/4.jpeg" className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./Images/Home/5.jpeg" className="d-block carousalImg" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        <div className="headerContent">
            <div className="my-4 row">
                <span className="textLine1 d-block col-11 ms-auto heading-text">Our Packages</span>
                <span className="textLine2 d-block col-11 ms-auto heading-text">Search Your <Typed className="typedText"
                    strings={['Perfect Destination.', 'Next Adventure.', 'Dream Getaway.', 'Travel Bliss.']}
                    typeSpeed={60} backSpeed={60} loop
                /></span>
            </div>
            <Form />
        </div>
    </div>
        <Testimonials />
    </div>)
}
export default Home
