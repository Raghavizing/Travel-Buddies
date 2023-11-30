import React, {useState} from "react";
import "./Form.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from '@fortawesome/free-solid-svg-icons'
const Form = () => {
    const [count, setCount] = useState(1000);
    return (<div className="headerForm rounded-3 row col-10 mx-auto px-4 rounded-5 text-black">
        <form action="">
            <div className="row pt-3">
                <div className="form-group  col-lg-4 col-md-4 col-12">
                    <label type="text" htmlFor="destination" className="form-label w-100">Search Your Destination:</label>
                    <input className="form-control h-50 rounded-4" id="destination" placeholder="Destination" />
                </div>
                <div className="form-group  col-lg-4 col-md-4 col-12">
                    <label htmlFor="Date" className="form-label w-100">Search Your Date:</label>
                    <input className="form-control h-50 rounded-4 text-black" type="date" id="Date" />
                </div>
                <div className="form-group col-lg-4 col-md-4 col-12">
                    
                    <label htmlFor="max" className="form-label w-100 d-flex justify-content-between"><span>Max Price:</span><span className="">$ {count}</span></label>
                    <input className="form-control h-50 rounded-4 px-2" type="range" id="max" max={100000} min={1000} value={count} onChange={(e)=>setCount(e.target.value)}/>
                </div>
            </div>
        </form>
        <div className="d-flex justify-content-center"><button className="btn Form-btn px-3 rounded-4"><FontAwesomeIcon icon={faFilter} style={{color: "#ffffff",}} className="mx-2"/> <span className="btn-text">More filters</span></button></div>
    </div>)
}
export default Form