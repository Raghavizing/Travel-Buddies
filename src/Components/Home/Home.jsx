import React from "react";
import "./Home.css"
import Typed from 'react-typed';
import Form from "./Form/Form";
let i = 0;
function returnUrl() {
    const imageUrl = ["./Images/Home/1.jpeg", "./Images/Home/2.jpeg", "./Images/Home/3.jpeg", "./Images/Home/4.jpeg", "./Images/Home/5.jpeg"]
    let url = imageUrl[i];
    return 'url("' + url + '")'
}
const Home = () => {
    return (<div className="headerBody">
        <div className="headerBackground">
            <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
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
                <span className="textLine1 d-block col-11 ms-auto">Our Packages</span>
                <span className="textLine2 d-block col-11 ms-auto">Search Your <Typed className="typedText"
                    strings={['Perfect Destination.', 'Next Adventure.', 'Dream Getaway.', 'Travel Bliss.']}
                    typeSpeed={60} backSpeed={60} loop
                /></span>
            </div>
            <Form />
        </div>
    </div>)
}
export default Home
