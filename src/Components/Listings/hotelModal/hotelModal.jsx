import React from "react";
import "./hotelModal.css"
const hotelModal = (props) => {
    return (
        <div className={`hotelModal ${props.show ? '' : "d-none"}`}>
            <div className="hotelModalBody">
                <div onClick={()=>{props.closeModal(false)}} className="modalClose">X</div>
                <p>Reservations</p>
                <p>Request a reservation. We will come back to you shortly.</p>
                <form>
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
    )
}
export default hotelModal