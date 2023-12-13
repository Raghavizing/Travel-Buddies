import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Listing from "./Listings/Listings";
import Footer from "./Footer/Footer";
import { BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (<div className="">
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Home} />
            </Routes>
            <Routes>
                <Route path='/Packages' Component={Listing} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>)
}
export default App