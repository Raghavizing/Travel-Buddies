import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
    return (
        <div className="nav-sticky">
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container-fluid row">
                    <div className="navbar-brand d-flex justify-content-center col-lg-2 col-4">
                        <FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#30c7ec" }} className="my-auto me-1" />
                        <div className="brand-name heading-text my-2">Travel.</div>
                    </div>
                    <button className="navbar-toggler col-lg-0 col-md-1 col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="col-lg-8 col-12 ms-lg-auto ms-2">
                            <ul className="navbar-nav paragraph-text text-lg-center text-start row m-0">
                                <li className="nav-item col-lg-2 col-12 my-lg-0 my-1">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item col-lg-2 col-12 my-lg-0 my-1">
                                    <a className="nav-link" href="/Hotels">Hotels</a>
                                </li>
                                <li className="nav-item col-lg-2 col-12 my-lg-0 my-1">
                                    <a className="nav-link" href="/Packages">Packages</a>
                                </li>
                                <li className="nav-item col-lg-2 col-12 my-lg-0 my-1">
                                    <a className="nav-link" href="/Gallery">Gallery</a>
                                </li>
                                <li className="col-lg-3 col-12 my-lg-auto my-1">
                                    <button className="btn navbar-btn px-3 rounded-4">
                                        <a className="text-white my-auto" style={{ textDecoration: "none" }} href="/Login">
                                            <LoginIcon fontSize="small" className="my-auto" /> Login
                                        </a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
