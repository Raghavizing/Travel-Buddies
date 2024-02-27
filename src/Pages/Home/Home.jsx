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
                        <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block carousalImg" alt="..." />
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
