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
            <div className='d-flex justify-content-center footerHead py-5'>
                <div className='mx-4'>
                    <div className='headerText1'>
                        Keep In Touch
                    </div>
                    <div className='headerText2'>
                        Travel With Us
                    </div>
                </div>
                <div className='mx-4 my-auto'>
                    <input className="form-control rounded-5" type="email" placeholder='Enter Your Email.' />
                </div>
                <div className='mx-1 my-auto'>
                    <button className='btn footerBtn rounded-5'><span className='mx-1'>Send</span> <FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
            <div className='footerBody mx-auto pt-2'>
                <div className='row footerBodyContent'>
                <div className='col-6'>
                    <div className='d-flex my-2'><FontAwesomeIcon icon={faEarthAmericas} style={{ color: "#30c7ec", }} className="my-auto me-1" /><div className="brand-name">Travel.</div></div>
                    <p className='footerBodyText'>Embark on unforgettable adventures with us. Discover exotic destinations, create lasting memories, and let our expert guides enhance your journey. Explore the world with confidence, knowing your wanderlust is in capable hands. Your dream getaway begins here. Bon voyage!</p>
                    <div className='my-2'>
                        <a href="" className='footerLink me-1'><FontAwesomeIcon icon={faInstagram} size='l'/></a>
                        <a href="" className='footerLink mx-1'><FontAwesomeIcon icon={faXTwitter} size='l'/></a>
                        <a href="" className='footerLink mx-1'><FontAwesomeIcon icon={faLinkedin} size='l'/></a>
                        <a href="" className='footerLink mx-1'><FontAwesomeIcon icon={faFacebook} size='l'/></a>
                    </div>
                </div>
                <div className='col-2 my-2'>
                    <div className='listHeader mb-2'>Our Agency</div>
                    <ul className='footerList'>
                        <li>Services</li>
                        <li>Insaurance</li>
                        <li>Booking</li>
                        <li>Tourism</li>
                        <li>Payment</li>

                    </ul>
                </div>
                <div className='col-2 my-2'>
                    <div className='listHeader mb-2'>Partners</div>
                    <ul className='footerList'>
                        <li>Booking</li>
                        <li>RentalCar</li>
                        <li>HostelWorld</li>
                        <li>Trivago</li>
                        <li>TripAdvisor</li>

                    </ul>
                </div>
                <div className='col-2 my-2'>
                    <div className='listHeader mb-2'>Last Minute</div>
                    <ul className='footerList'>
                        <li>London</li>
                        <li>Calafornia</li>
                        <li>Indonesia</li>
                        <li>Europe</li>
                        <li>Ocenia</li>
                    </ul>
                </div>
                </div>
                <div className='d-flex justify-content-around footerTrademark'>
                <div>Best Travel Website</div>
                <div>Developed By Raghav Chaturvedi</div>
            </div>
            </div>
        </div>
    )
}

export default Footer