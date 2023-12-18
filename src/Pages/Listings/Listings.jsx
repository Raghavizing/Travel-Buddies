import React, { useState } from "react";
import { useEffect } from "react";
import Hotel from "../../Components/Hotel"
import AOS from 'aos';
import "./Listings.css";
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import HotelModal from "./hotelModal/hotelModal";
const Listing = () => {
    const [openModal, setOpenModal] = useState(false);
    const [hotelName, setHotelName] = useState('');
    const [hotelLocation, setHotelLocation] = useState('');
    const [hotelPrice, setHotelPrice] = useState('');
    const [hotelRating, setHotelRating] = useState('');
    useEffect(() => {

        document.body.style.overflow = (openModal) ? "hidden" : ''
    }, [openModal]);
    useEffect(() => {
        AOS.init();
    }, [])
    function createCard(props) {
        return (
            <Card key={props.id} image={props.image} name={props.name} location={props.location} price={props.price} rating={props.rating} description={props.description} />
        )
    }
    function Card(props) {
        return (
            <div className="card shadow col-lg-3 col-md-5 col-10 mx-3 my-3 rounded-2 text-left p-0 listing-card" data-aos="fade-up">
                <img src={props.image} className="card-img-top listing-card-img" alt="..." />
                <div className="card-body listing-card-body my-auto">
                    <div className="listing-card-header">
                        <h5 className="card-title listing-card-name subheading-text">{props.name}</h5>
                        <p className="card-text paragraph-text"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffd700", }} /> {props.location}</p>
                    </div>
                    <div className="listing-card-details py-3 my-2 d-flex justify-content-between">
                        <p className="card-text paragraph-text"><FontAwesomeIcon icon={faStar} style={{ color: "#ffd700", }} /> {props.rating}</p>
                        <p className="card-text listing-card-price subheading-text">{props.price}</p>
                    </div>
                    <div className="card-text paragraph-text">{props.description}</div>
                </div>
                <button className="btn listing-btn text-white px-3 rounded-4 mb-4 ms-2 col-4" onClick={() => { setOpenModal(true); setHotelName(props.name); setHotelLocation(props.location); setHotelRating(props.rating); setHotelPrice(props.price); }}> <div className="d-flex paragraph-text"> Details  <FontAwesomeIcon icon={faClipboardList} style={{ color: "#ffffff", }} className="my-auto ms-auto" /></div></button>
            </div>
        )
    }
    return (<div className="py-2 listing-page">
        <div className="listingTitle col-11 ms-auto mt-4 heading-text">Most Visited <span className="blue-underline">Destinations.</span></div>
        <div className="row d-flex justify-content-center py-2" >
            {Hotel.map(createCard)}
        </div>
        <HotelModal show={openModal} name={hotelName} location={hotelLocation} price={hotelPrice} rating={hotelRating} closeModal={setOpenModal} />
    </div>)
}
export default Listing