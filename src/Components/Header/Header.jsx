import React from "react";
import "./Header.css"
import Typed from 'react-typed';
import Form from "./Form/Form";
import img1 from "../Images/beach.jpeg"
import img2 from "../Images/mountain.jpeg"
import img3 from "../Images/vacation.jpeg"
let i = 0;
function returnUrl() {
    const imageUrl = ["/src/Images/vacation.jpeg", "/src/Images/beach.jpeg", "/src/Images/mountain.jpeg"]
    let url = imageUrl[i];
    console.log('url("' + url + '")')
    return 'url("' + url + '")'
}
const Header = () => {
    return (<div className="headerBody">
        <div className="headerBackground">
            <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block carousalImg" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block carousalImg" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        <div className="headerContent">
            <div className="my-4 row">
                <span className="textLine1 d-block col-11 ms-auto">Our Packages</span>
                <span className="textLine2 d-block col-11 ms-auto">Search Your <Typed className="typedText"
                    strings={['Perfect destination.', 'Next adventure.', 'Dream getaway.', 'Travel bliss.']}
                    typeSpeed={60} backSpeed={60} loop
                /></span>
            </div>
            <Form />
        </div>
    </div>)
}
export default Header
