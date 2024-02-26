import React from "react";
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <div className="nav-sticky">
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container-fluid row">
                    <div className="navbar-brand d-flex justify-content-center col-4">
                        <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#30c7ec", }} className="my-auto me-1" /><div className="brand-name heading-text">Travel.</div></div>
                    <div className="col-8">
                        <ul className="navbar-nav d-flex justify-content-center paragraph-text">
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/Hotels">Hotels</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/Packages">Packages</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/Gallery">Gallery</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/Pages">Pages</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/News">News</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/Contact">Contact</a>
                            </li>
                            <li className="my-auto">
                                <button className="btn navbar-btn px-3 rounded-4" ><a className="text-white" style={{textDecoration:"none"}} href="/Login">Login</a></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar