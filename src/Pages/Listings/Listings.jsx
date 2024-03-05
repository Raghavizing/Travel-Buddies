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
import Form from "./Form/Form"
import searchedHotelsArray from "../../Components/SearchHotels";
const Listing = () => {
    const [isSearched, setIsSearched] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [searching, setSearching] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [hotelId, setHotelId] = useState('');
    async function searchHotels(details) {
        setIsSearched(false);
        setSearching(true);
        const url = `https://airbnb13.p.rapidapi.com/search-location?location=${details.destination}&checkin=${details.arrival}&checkout=${details.departure}&adults=${details.adults}&children=${details.children}&pets=${details.pets}&page=1&currency=USD`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bf51d6b64bmsh3115634720b2125p1334d5jsn6c1c8ac3729d',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setIsSearched(true);
            setSearchResult(result.results)
            setSearching(false);
        } catch (error) {
            console.error(error);
        }
    }
    // function searchHotels(details){
    //     setIsSearched(true);
    //     setSearchResult(searchedHotelsArray.results)
    // }
    useEffect(() => {

        document.body.style.overflow = (openModal) ? "hidden" : ''
    }, [openModal]);
    useEffect(() => {
        AOS.init();
    }, [])
    function createCard(props) {
        return (
            <Card key={props.id} id={props.id} image={props.image} name={props.name} location={props.location} price={props.price} rating={props.rating} description={props.description} />
        )
    }
    function createSearchedCard(props) {
        return (
            <SearchCard key={props.id} id={props.id} image={props.images[0]} name={props.name} location={props.address} price={props.price.total} rating={props.rating} amenities={props.previewAmenities} />
        )
    }
    function Card(props) {
        return (
            <div className="card shadow col-lg-3 col-md-5 col-8 mx-3 my-3 rounded-2 text-left p-0 listing-card" data-aos="fade-up">
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
                <button className="btn listing-btn text-white px-3 rounded-4 mb-4 ms-2 col-4" onClick={() => { setOpenModal(true); setHotelId(props.id); }}> <div className="d-flex paragraph-text"> Details  <FontAwesomeIcon icon={faClipboardList} style={{ color: "#ffffff", }} className="my-auto ms-auto" /></div></button>
            </div>
        )
    }
    function SearchCard(props) {
        return (
            <div className="card shadow col-lg-3 col-md-5 col-8 mx-3 my-3 rounded-2 text-left p-0 listing-card" data-aos="fade-up">
                <img src={props.image} className="card-img-top listing-card-img" alt="..." />
                <div className="card-body listing-card-body my-auto">
                    <div className="listing-card-header">
                        <h5 className="card-title listing-card-name subheading-text">{props.name}</h5>
                        <p className="card-text paragraph-text"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffd700", }} /> {props.location}</p>
                    </div>
                    <div className="listing-card-details py-3 my-2 d-flex justify-content-between">
                        <p className="card-text paragraph-text"><FontAwesomeIcon icon={faStar} style={{ color: "#ffd700", }} /> {props.rating}</p>
                        <p className="card-text listing-card-price subheading-text">${props.price}/night</p>
                    </div>
                    <div className="card-text paragraph-text">
                        <div><p className="subheading-text text-black amenities-heading">Amenities:</p>
                            <ul className="amenities-list">
                                {props.amenities.map((item) => { return <li>{item}</li> })}
                            </ul>
                        </div>
                    </div>
                </div>
                <button className="btn listing-btn text-white px-3 rounded-4 mb-4 ms-2 col-4" onClick={() => { setOpenModal(true); setHotelId(props.id); }}> <div className="d-flex paragraph-text"> Details  <FontAwesomeIcon icon={faClipboardList} style={{ color: "#ffffff", }} className="my-auto ms-auto" /></div></button>
            </div>
        )
    }
    return (<div className="py-2 listing-page whiteBackground">
        <div className="listingTitle col-11 ms-auto mt-4 heading-text">Search <span className="blue-underline">Hotels.</span></div>
        <Form handleChange={searchHotels} />
        <div hidden={!searching} className="text-center"><img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" alt="" className="loadingImg my-4" /></div>
        <div hidden={!isSearched}>
            <div className="listingTitle col-11 ms-auto mt-4 heading-text">Search <span className="blue-underline">Results.</span></div>
            <div className="row d-flex justify-content-center py-2" >
                {searchResult.map(createSearchedCard)}
            </div>
        </div>
        <div hidden={isSearched}>
            <div className="listingTitle col-11 ms-auto mt-4 heading-text">Most Visited <span className="blue-underline">Destinations.</span></div>
            <div className="row d-flex justify-content-center py-2" >
                {Hotel.map(createCard)}
            </div>
        </div>
        <HotelModal show={openModal} id={hotelId} closeModal={setOpenModal} />
    </div>)
}
export default Listing