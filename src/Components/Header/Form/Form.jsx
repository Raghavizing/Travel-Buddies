import React from "react";
import "./Form.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from '@fortawesome/free-solid-svg-icons'
const Form = () => {
    return (<div className="headerForm rounded-3 row col-10 mx-auto px-4">
        <form action="">
            <div className="row pt-3">
                <div className="form-group  col-lg-4 col-md-4 col-12">
                    <label type="text" htmlFor="destination" className="form-label">Search your Destination:</label>
                    <input className="form-control h-50 bg-light rounded-4" id="destination" placeholder="Destination" />
                </div>
                <div className="form-group  col-lg-4 col-md-4 col-12">
                    <label htmlFor="Date" className="form-label">Search your Date:</label>
                    <input className="form-control h-50 bg-light rounded-4" type="date" id="Date" />
                </div>
                <div className="form-group col-lg-4 col-md-4 col-12">
                    <label htmlFor="max" className="form-label">Max price:</label>
                    <input className="form-range bg-light h-50 rounded-4" type="range" id="max" max={100} min={1}/>
                </div>
            </div>
        </form>
        <div className="d-flex justify-content-center my-3"><button className="btn Form-btn px-3 rounded-4"><FontAwesomeIcon icon={faFilter} style={{color: "#ffffff",}} className="mx-2"/> <span className="btn-text">More filters</span></button></div>
    </div>)
}
export default Form