import React from "react";
import { useState, useEffect } from "react";
import "./Home.css"
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
                'X-RapidAPI-Key': 'bf51d6b64bmsh3115634720b2125p1334d5jsn6c1c8ac3729d',
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
        if(permission==='false'){return}
        let lat = sessionStorage.getItem("latitude");
        let long = sessionStorage.getItem("longitude");
        if (lat && long) {
            getWeather(lat,long);
        }
        else {

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    let { latitude, longitude } = (position.coords);
                    getWeather(latitude, longitude);
                    sessionStorage.setItem("latitude", latitude);
                    sessionStorage.setItem("longitude", longitude);
                },(error)=>{
                    sessionStorage.setItem("locationPermission", false);
                });
            }
        }
    }, [])
    return (<div className="blueBackground"><div className="headerBody p-3">
        <div className="weather bg-white shadow col-lg-2 col-4" hidden={!isWeather}>
            <div className="d-flex" hidden={searching}>
                <img className="weatherIcon" src={weather.icon} alt="" />
                <div className="my-auto">
                    <p className="paragraph-text">{weather.tempC}°C / {weather.tempF}°F </p>
                    <p className="paragraph-text">{weather.text} </p>
                </div>
            </div>
        </div>
        <div className="row headerContent1">
            <div className="row col-lg-6 col-12 text-center text-lg-start my-auto">
                <span className="textLine1 d-block col-lg-11 ms-auto heading-text">Our Packages</span>
                <span className="textLine2 d-block col-lg-11 ms-auto heading-text">Search Your <ReactTyped className="typedText"
                    strings={['Perfect Destination.', 'Next Adventure.', 'Dream Getaway.', 'Travel Bliss.']}
                    typeSpeed={60} backSpeed={60} loop
                /></span>
            </div>
            <div className="col-lg-6 col-12 text-center">
                <img className="headerImage" src="https://png.pngtree.com/png-clipart/20220123/original/pngtree-vector-hand-drawn-travel-family-vacation-travel-png-image_7164365.png" alt="" />
            </div>
        </div>
    </div>
        <Testimonials />
    </div>)
}
export default Home
