import React, { useState, useEffect } from "react";
import Hotel from "../../Components/Hotel";
import AOS from 'aos';
import "./Listings.css";
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import HotelModal from "./hotelModal/hotelModal";
import Form from "./Form/Form";

const Listing = () => {
    const [isSearched, setIsSearched] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [searching, setSearching] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [hotelId, setHotelId] = useState('');

    async function searchHotels(details) {
        let apiKey = process.env.REACT_APP_hotelAPIKey;
        setIsSearched(false);
        setSearching(true);
        const url = `https://airbnb13.p.rapidapi.com/search-location?location=${details.destination}&checkin=${details.arrival}&checkout=${details.departure}&adults=${details.adults}&children=${details.children}&pets=${details.pets}&page=1&currency=USD`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setIsSearched(true);
            setSearchResult(result.results);
            setSearching(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        document.body.style.overflow = openModal ? "hidden" : "";
    }, [openModal]);

    useEffect(() => {
        AOS.init();
    }, []);

    function createCard(props) {
        return (
            <Card
                key={props.id}
                id={props.id}
                image={props.image}
                name={props.name}
                location={props.location}
                price={props.price}
                rating={props.rating}
                description={props.description}
            />
        );
    }

    function createSearchedCard(props) {
        return (
            <SearchCard
                key={props.id}
                id={props.id}
                image={props.images[0]}
                name={props.name}
                location={props.address}
                price={props.price.total}
                rating={props.rating}
                amenities={props.previewAmenities}
            />
        );
    }

    function Card(props) {
        return (
            <div className="col-lg-3 col-md-5 col-11 my-3 mx-auto" data-aos="fade-up">
                <div className="card shadow rounded-2 text-left p-0 listing-card mx-auto h-100">
                    <img src={props.image} className="card-img-top listing-card-img" alt={props.name} />
                    <div className="card-body listing-card-body">
                        <div className="listing-card-header">
                            <h5 className="card-title listing-card-name subheading-text">{props.name}</h5>
                            <p className="card-text paragraph-text"><FontAwesomeIcon icon={faLocationDot} /> {props.location}</p>
                        </div>
                        <div className="listing-card-details d-flex justify-content-between">
                            <p className="card-text paragraph-text"><FontAwesomeIcon icon={faStar} /> {props.rating}</p>
                            <p className="card-text listing-card-price subheading-text">{props.price}</p>
                        </div>
                        <div className="card-text paragraph-text">{props.description}</div>
                    </div>
                    <button className="btn listing-btn text-white px-3 rounded-4 mb-4 ms-2 col-4" onClick={() => { setOpenModal(true); setHotelId(props.id); }}>
                        <div className="d-flex paragraph-text"> Details  <FontAwesomeIcon icon={faClipboardList} className="my-auto ms-auto" /></div>
                    </button>
                </div>
            </div>
        );
    }

    function SearchCard(props) {
        return (
            <div className="col-lg-5 col-md-8 col-11 mx-auto my-3" data-aos="fade-up">
                <div className="card shadow rounded-2 text-left p-0 listing-card">
                    <img src={props.image} className="card-img-top listing-card-img" alt={props.name} />
                    <div className="card-body listing-card-body">
                        <div className="listing-card-header">
                            <h5 className="card-title listing-card-name subheading-text">{props.name}</h5>
                            <p className="card-text paragraph-text"><FontAwesomeIcon icon={faLocationDot} /> {props.location}</p>
                        </div>
                        <div className="listing-card-details d-flex justify-content-between">
                            <p className="card-text paragraph-text"><FontAwesomeIcon icon={faStar} /> {props.rating}</p>
                            <p className="card-text listing-card-price subheading-text">${props.price}/night</p>
                        </div>
                        <div className="card-text paragraph-text">
                            <div>
                                <p className="subheading-text text-black amenities-heading">Amenities:</p>
                                <ul className="amenities-list">
                                    {props.amenities.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-2 listing-page blueBackground">
            <div className="listingTitle col-11 ms-auto mt-4 heading-text">Search <span className="blue-underline">Hotels.</span></div>
            <Form handleChange={searchHotels} />
            <div hidden={!searching} className="text-center"><img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" alt="Loading" className="loadingImg my-4" /></div>
            <div hidden={!isSearched}>
                <div className="listingTitle col-11 ms-auto mt-4 heading-text">Search <span className="blue-underline">Results.</span></div>
                <div className="row d-flex justify-content-center py-2">
                    {searchResult.map(createSearchedCard)}
                </div>
            </div>
            <div hidden={isSearched}>
                <div className="listingTitle col-11 ms-auto mt-4 heading-text">Most Visited <span className="blue-underline">Destinations.</span></div>
                <div className="row d-flex justify-content-center py-2">
                    {Hotel.map(createCard)}
                </div>
            </div>
            <HotelModal show={openModal} id={hotelId} closeModal={setOpenModal} />
        </div>
    );
};

export default Listing;
