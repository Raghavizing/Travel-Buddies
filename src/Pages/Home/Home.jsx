import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    const [searching, setSearching] = useState(false);
    const [weather, setWeather] = useState({
        tempC: '',
        tempF: '',
        icon: '',
        text: ''
    });
    const [isWeather, setIsWeather] = useState(false);

    async function getWeather(latitude, longitude) {
        setSearching(true);
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'your-api-key',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const { current } = await response.json();
            setWeather({
                tempC: current.temp_c,
                tempF: current.temp_f,
                icon: current.condition.icon,
                text: current.condition.text
            });
            setSearching(false);
            setIsWeather(true);
        } catch (error) {
            setIsWeather(false);
        }
    }

    useEffect(() => {
        let permission = sessionStorage.getItem("locationPermission");
        if (permission === 'false') return;
        let lat = sessionStorage.getItem("latitude");
        let long = sessionStorage.getItem("longitude");
        if (lat && long) {
            getWeather(lat, long);
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    let { latitude, longitude } = position.coords;
                    getWeather(latitude, longitude);
                    sessionStorage.setItem("latitude", latitude);
                    sessionStorage.setItem("longitude", longitude);
                }, (error) => {
                    sessionStorage.setItem("locationPermission", false);
                });
            }
        }
    }, []);

    return (
        <div className="blueBackground">
            <div className="headerBody p-3">
                <div className="weather bg-white shadow col px-3 m-3" hidden={!isWeather}>
                    <div className="d-flex" hidden={searching}>
                        <img className="weatherIcon" src={weather.icon} alt="Weather icon" />
                        <div className="my-auto">
                            <p className="paragraph-text">{weather.tempC}°C / {weather.tempF}°F</p>
                            <p className="paragraph-text">{weather.text}</p>
                        </div>
                    </div>
                </div>
                <div className="row headerContent1">
                    <div className="col-lg-6 col-12 text-center text-lg-start my-auto">
                        <span className="textLine1 d-block col-lg-11 ms-lg-auto mx-auto heading-text mb-4">
                            Search Your <ReactTyped
                                className="typedText"
                                strings={['Perfect Destination.', 'Next Adventure.', 'Dream Getaway.', 'Travel Bliss.']}
                                typeSpeed={60}
                                backSpeed={60}
                                loop
                            />
                        </span>
                        <span className="textLine2 d-block col-lg-11 col-12 ms-lg-auto mx-auto paragraph-text px-lg-0 px-5">
                            Welcome to our travel hub! Explore captivating destinations with our expertly curated experiences. From serene beaches to bustling cities, we tailor journeys to your wanderlust. Let's turn your travel dreams into unforgettable adventures!
                        </span>
                    </div>
                    <div className="col-lg-6 col-12 text-center">
                        <img className="headerImage" src="/Images/home_page.png" alt="Home page" />
                    </div>
                </div>
            </div>
            <Testimonials />
        </div>
    );
};

export default Home;
