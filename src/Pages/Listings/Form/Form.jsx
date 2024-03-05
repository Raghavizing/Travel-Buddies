import React, { useState } from "react";
import "./Form.css"
import SearchIcon from '@mui/icons-material/Search';
const Form = (props) => {
    let today = new Date().toISOString().substring(0, 10);
    const [dateError, setDateError] = useState(false);
    const [details, setDetails] = useState({
        destination: "",
        arrival: today,
        departure: "",
        adults: 2,
        children: 0,
        pets: 0
    })
    function resetForm() {
        setDetails({
            destination: "",
            arrival: today,
            departure: "",
            adults: 2,
            children: 0,
            pets: 0
        })
    }
    function resetErrors() {
        setDateError(false);
    }
    function handleChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        setDetails((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (<div className="headerForm shadow bg-white rounded-3 row col-10 mx-auto px-4 rounded-5 text-black my-4">
        <form onSubmit={(event) => {
            event.preventDefault();
            resetErrors();
            let arrival = new Date(details.arrival).getTime();
            let departure = new Date(details.departure).getTime();
            if (arrival > departure) {
                setDateError((e)=>!e);
                alert(dateError);
            }
            if (!dateError) {
                alert(dateError);
                props.handleChange(details);
                resetForm();
                resetErrors();
            }
        }}>
            <div className="row pt-3">
                <div className="form-group  col-lg-4 col-md-4 col-12 my-1">
                    <label type="text" htmlFor="destination" className="form-label w-100 subheading-text">Search Your Destination:</label>
                    <input name="destination" className="form-control h-50 rounded-4 paragraph-text" id="destination" placeholder="Destination" value={details.destination} required onChange={handleChange} />
                </div>
                <div className="form-group  col-lg-4 col-md-4 col-6 my-1">
                    <label htmlFor="arrivalDate" className="form-label w-100 subheading-text">Arrival Date:</label>
                    <input name="arrival" className="form-control h-50 rounded-4 text-black paragraph-text" type="date" id="arrivalDate" value={details.arrival} required onChange={handleChange} min={today} />
                </div>
                <div className="form-group  col-lg-4 col-md-4 col-6 my-1">
                    <label htmlFor="departureDate" className="form-label w-100 subheading-text">Departure Date: <span className="text-danger errorMessage mx-2" hidden={!dateError}>* departure date should be after the arrival date.</span></label>
                    <input name="departure" className="form-control h-50 rounded-4 text-black paragraph-text" type="date" id="departureDate" value={details.departure} required onChange={handleChange} min={today} />
                </div>
                <div className="form-group  col-lg-4 col-md-4 col-6 my-1">
                    <label htmlFor="adults" className="form-label w-100 subheading-text">Adults:</label>
                    <input name="adults" className="form-control h-50 rounded-4 text-black paragraph-text" type="number" id="adults" value={details.adults} required onChange={handleChange} min={1}/>
                </div>
                <div className="form-group  col-lg-4 col-md-4 col-6 my-1">
                    <label htmlFor="children" className="form-label w-100 subheading-text">Children:</label>
                    <input name="children" className="form-control h-50 rounded-4 text-black paragraph-text" type="number" id="children" value={details.children} required onChange={handleChange} min={0}/>
                </div>
                <div className="form-group  col-lg-4 col-md-4 col-6 my-1">
                    <label htmlFor="pets" className="form-label w-100 subheading-text">Pets:</label>
                    <input name="pets" className="form-control h-50 rounded-4 text-black paragraph-text" type="number" id="pets" value={details.pets} required onChange={handleChange} min={0}/>
                </div>
            </div>
            <div className="d-flex justify-content-center"><button className="btn Form-btn px-3 rounded-4 text-white"><SearchIcon /> <span className="btn-text subheading-text">Search</span></button></div>
        </form>
    </div>
    )
}
export default Form