    import React, { useState } from "react";
    import "./hotelModal.css"
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faXmark } from '@fortawesome/free-solid-svg-icons'
    import { faStar } from '@fortawesome/free-solid-svg-icons'
    import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
    import Hotel from "../../../Components/Hotel";
    import { ToastContainer, toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    function HotelModal(props) {
        const[disableSubmit, setDisableSubmit] = useState(false);
        const [details, setDetails] = useState({
            fName: "",
            lName: "",
            email: "",
            arrival: "",
            departure: "",
            adults: 2,
            rooms: 1,
            children: 0
        })
        function handleChange(event) {
            let value = event.target.value;
            let name = event.target.name;
            setDetails((prev) => {
                return ({
                    ...prev,
                    [name]: value
                })
            })
        }
        function resetForm() {
            setDetails({
                fName: "",
                lName: "",
                email: "",
                arrival: "",
                departure: "",
                adults: 2,
                rooms: 1,
                children: 0
            })
            setDisableSubmit(false);
        }
        function notify(event) {
            setDisableSubmit(true);
            event.preventDefault();
            toast.success("We have recieved your reservation request and will get back to you shortly.");
            setTimeout(() => {
                resetForm();
                props.closeModal(false);
            },"6000");
        }
        let hotel = Hotel.filter(i => i.id === props.id)[0]
        if (hotel !== null && hotel !== undefined) {
            return (
                <div className={`hotelModalBackground ${props.show ? '' : "d-none"}`}>
                    <div className="hotelModal col-lg-6 mx-auto col-md-8 col-10">
                        <div onClick={() => { props.closeModal(false) }} className="modalClose"><FontAwesomeIcon icon={faXmark} size="xl" /></div>
                        <div className="hotelModalBody">
                            <div className="modalHotelDetails">
                                <div className="d-flex justify-content-between heading-text"><p className="hotelNameModal">{hotel.name}</p> <p className="hotelPriceModal">{hotel.price}</p></div>
                                <div className="d-flex justify-content-between subheading-text"><p className="hotelLocationModal"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffd700", }} /> {hotel.location}</p><p><FontAwesomeIcon icon={faStar} style={{ color: "#ffd700", }} /> {hotel.rating}</p></div>
                            </div>
                            <p className="modalText1 heading-text">Reservations</p>
                            <p className="modalText2 subheading-text">Request a reservation. We will come back to you shortly.</p>
                            <form className="paragraph-text" onSubmit={notify}>
                                <ToastContainer toastStyle={{ backgroundColor: "green", color: "white" }} autoClose={5000} />
                                <div className="d-flex my-4">
                                    <div className="form-group col-6">
                                        <label htmlFor="fName" className="paragraph-text">First Name:</label>
                                        <input name="fName" type="text" className="form-control" id="fName" required onChange={handleChange} value={details.fName} />

                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="lName" className="paragraph-text">Last Name:</label>
                                        <input name="lName" type="text" className="form-control" id="lName" required onChange={handleChange} value={details.lName} />

                                    </div>
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="email" className="paragraph-text">Email:</label>
                                    <input name="email" type="email" className="form-control" id="email" required onChange={handleChange} value={details.email} />
                                    <small id="emailHelp" className="form-text text-muted">Travel never shares your data with anyone else.</small>
                                </div>
                                <div className="d-flex my-4">
                                    <div className="form-group col-6">
                                        <label htmlFor="arrival" className="paragraph-text">Arrival:</label>
                                        <input name="arrival" className="form-control" id="arrival" type="date" required onChange={handleChange} value={details.arrival} />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="departure" className="paragraph-text">Departure:</label>
                                        <input name="departure" className="form-control" id="departure" type="date" required onChange={handleChange} value={details.departure} />
                                    </div>
                                </div>
                                <div className="d-flex my-4">
                                    <div className="form-group col-4">
                                        <label htmlFor="rooms" className="paragraph-text">Rooms:</label>
                                        <input name="rooms" type="number" className="form-control" id="rooms" min={1} required onChange={handleChange} value={details.rooms} />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="adults" className="paragraph-text">Adults:</label>
                                        <input name="adults" type="number" className="form-control" id="adults" min={1} required onChange={handleChange} value={details.adults} />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="children" className="paragraph-text">Children:</label>
                                        <input name="children" type="number" className="form-control" id="children" min={0} required onChange={handleChange} value={details.children} />
                                    </div>
                                </div>
                                <button className="btn btn-primary mx-auto" disabled={disableSubmit}>Book Reservation</button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
    export default HotelModal