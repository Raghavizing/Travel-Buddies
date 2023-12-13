import React from "react";
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <div className="nav-sticky">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid row">
                    <div className="navbar-brand d-flex justify-content-center col-4">
                        <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#30c7ec", }} className="my-auto me-1" /><div className="brand-name">Travel.</div></div>
                    <div className="col-8">
                        <ul className="navbar-nav d-flex justify-content-center">
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/Packages">Packages</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Pages</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">News</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item my-auto">
                                <button className="btn navbar-btn text-white px-3 rounded-4">Book Now</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar