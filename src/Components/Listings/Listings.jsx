import React from "react";
import { useEffect } from "react";
import Hotel from "../Hotel"
import AOS from 'aos';
import "./Listings.css";
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faClipboardList} from '@fortawesome/free-solid-svg-icons'
function Card(props) {
    return (
        <div className="card shadow col-lg-3 col-md-5 col-10 mx-3 my-2 rounded-2 text-left p-0 listing-card" data-aos="fade-up">
            <img src={props.image} className="card-img-top listing-card-img" alt="..." />
            <div className="card-body listing-card-body">
                <div className="listing-card-header">
                <h5 className="card-title listing-card-name">{props.name}</h5>
                <p className="card-text"><FontAwesomeIcon icon={faLocationDot} style={{color: "#ffd700",}} /> {props.location}</p>
                </div>
                <div className="listing-card-details py-3 my-2 d-flex justify-content-between">
                <p className="card-text"><FontAwesomeIcon icon={faStar} style={{color: "#ffd700",}} /> {props.rating}</p> 
                <p className="card-text listing-card-price">{props.price}</p>
                </div>
                <p className="card-text">{props.description}</p>
            </div>
            <button className="btn listing-btn text-white px-3 rounded-4 mb-4 ms-2 col-4">Details  <FontAwesomeIcon icon={faClipboardList} style={{color: "#ffffff",}} /></button>
        </div>
    )
}
function createCard(props) {
    return (
        <Card key={props.id} image={props.image} name={props.name} location = {props.location} price={props.price} rating={props.rating} description={props.description} />
    )
}
const Listing = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (<div className="mt-5">
        <div className="listingTitle col-11 ms-auto">Most Visited <span className="listingTitleUnderline">Destinations</span></div>
        <div className="row d-flex justify-content-center">
            {Hotel.map(createCard)}
        </div>

    </div>)
}
export default Listing