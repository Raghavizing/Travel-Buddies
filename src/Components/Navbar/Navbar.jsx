import React from "react";
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <div className="nav-sticky">
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container-fluid row">
                    <div className="navbar-brand d-flex justify-content-center col-lg-6 col-4">
                        <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#30c7ec", }} className="my-auto me-1" /><div className="brand-name heading-text">Travel.</div></div>
                    <button class="navbar-toggler col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div className="col-lg-6 col-8 mx-auto">
                        <ul className="navbar-nav paragraph-text text-center">
                            <li className="nav-item col-3">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link" href="/Hotels">Hotels</a>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link" href="/Packages">Packages</a>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link" href="/Gallery">Gallery</a>
                            </li>
                            {/* <li className="nav-item mx-2">
                                <a className="nav-link" href="/Pages">Pages</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/News">News</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/Contact">Contact</a>
                            </li> */}
                            <li className="my-auto col-3">
                                <button className="btn navbar-btn px-3 rounded-4" ><a className="text-white" style={{ textDecoration: "none" }} href="/Login">Login</a></button>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar