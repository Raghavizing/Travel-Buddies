import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
function Footer() {
    return (
        <div className='footer py-4'>
            <div className='d-flex justify-content-center row footerHead py-5'>
                <div className='col-lg-6 col-12 text-center my-lg-0 my-3'>
                    <div className='headerText1 heading-text'>
                        Keep In Touch
                    </div>
                    <div className='headerText2 heading-text'>
                        Travel With Us
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-6 my-auto'>
                    <input className="form-control rounded-5" type="email" placeholder='Enter Your Email.' />
                </div>
                <div className='col-lg-3 col-md-2 col-4 my-auto'>
                    <button className='btn footerBtn rounded-5'><span className='mx-1 paragraph-text'>Send</span> <FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
            <div className='footerBody mx-auto pt-2'>
                <div className='row footerBodyContent'>
                    <div className='col-lg-6 col-12'>
                        <div className='d-flex my-2'><FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#30c7ec", }} className="my-auto me-1" /><div className="brand-name heading-text">Travel.</div></div>
                        <p className='footerBodyText paragraph-text'>Embark on unforgettable adventures with us. Discover exotic destinations, create lasting memories, and let our expert guides enhance your journey. Explore the world with confidence, knowing your wanderlust is in capable hands. Your dream getaway begins here. Bon voyage!</p>
                        <div className='my-2'>
                            <a href="https://www.instagram.com" className='footerLink me-2'><FontAwesomeIcon icon={faInstagram} size='xl' /></a>
                            <a href="https://www.twitter.com" className='footerLink mx-2'><FontAwesomeIcon icon={faXTwitter} size='xl' /></a>
                            <a href="https://www.linkedin.com" className='footerLink mx-2'><FontAwesomeIcon icon={faLinkedin} size='xl' /></a>
                            <a href="https://www.facebook.com" className='footerLink mx-2'><FontAwesomeIcon icon={faFacebook} size='xl' /></a>
                        </div>
                    </div>
                    <div className='col-lg-2 col-4 my-2'>
                        <div className='listHeader mb-2 subheading-text'>Our Agency</div>
                        <ul className='footerList paragraph-text'>
                            <li>Services</li>
                            <li>Insaurance</li>
                            <li>Booking</li>
                            <li>Tourism</li>
                            <li>Payment</li>

                        </ul>
                    </div>
                    <div className='col-lg-2 col-4 my-2'>
                        <div className='listHeader mb-2 subheading-text'>Partners</div>
                        <ul className='footerList paragraph-text'>
                            <li>Booking</li>
                            <li>RentalCar</li>
                            <li>HostelWorld</li>
                            <li>Trivago</li>
                            <li>TripAdvisor</li>

                        </ul>
                    </div>
                    <div className='col-lg-2 col-4 my-2'>
                        <div className='listHeader mb-2 subheading-text'>Last Minute</div>
                        <ul className='footerList'>
                            <li>London</li>
                            <li>Calafornia</li>
                            <li>Indonesia</li>
                            <li>Europe</li>
                            <li>Ocenia</li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex justify-content-around footerTrademark py-2'>
                    <div className='heading-text'>Best Travel Website</div>
                    <div className='heading-text'>Developed By Raghav Chaturvedi</div>
                </div>
            </div>
        </div>
    )
}

export default Footer