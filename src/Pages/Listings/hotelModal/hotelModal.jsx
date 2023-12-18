import React from "react";
import "./hotelModal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const hotelModal = (props) => {
    return (
        <div className={`hotelModalBackground ${props.show ? '' : "d-none"}`}>
            <div className="hotelModal">
                <div onClick={() => { props.closeModal(false) }} className="modalClose"><FontAwesomeIcon icon={faXmark} size="xl" /></div>
                <div className="hotelModalBody">
                    <div className="modalHotelDetails">
                        <div className="d-flex justify-content-between heading-text"><p className="hotelNameModal">{props.name}</p> <p className="hotelPriceModal">{props.price}</p></div>
                        <div className="d-flex justify-content-between subheading-text"><p className="hotelLocationModal"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffd700", }} /> {props.location}</p><p><FontAwesomeIcon icon={faStar} style={{ color: "#ffd700", }} /> {props.rating}</p></div>
                    </div>
                    <p className="modalText1 heading-text">Reservations</p>
                    <p className="modalText2 subheading-text">Request a reservation. We will come back to you shortly.</p>
                    <form className="paragraph-text">
                        <div className="d-flex my-4">
                            <div className="form-group col-6">
                                <input type="text" className="form-control" id="fName" placeholder="First Name" />

                            </div>
                            <div className="form-group col-6">
                                <input type="text" className="form-control" id="lName" placeholder="Last Name" />

                            </div>
                        </div>
                        <div className="form-group my-4">
                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">Travel never shares your data with anyone else.</small>
                        </div>
                        <div className="d-flex my-4">
                            <div className="form-group col-6">
                                <input className="form-control" id="fromDate" placeholder="From" type="text"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")} />
                            </div>
                            <div className="form-group col-6">
                                <input className="form-control" id="toDate" placeholder="To" type="text"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")} />
                            </div>
                        </div>
                        <div className="d-flex my-4">
                            <div className="form-group col-4">
                                <input type="number" className="form-control" id="rooms" placeholder="Rooms" />
                            </div>
                            <div className="form-group col-4">
                                <input type="number" className="form-control" id="adults" placeholder="Adults" />
                            </div>
                            <div className="form-group col-4">
                                <input type="number" className="form-control" id="children" placeholder="Children" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mx-auto">Book Reservation</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default hotelModal