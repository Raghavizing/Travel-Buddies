import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Listing from "./Pages/Listings/Listings"
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Packages from "./Pages/Packages/Packages";
import Gallery from "./Pages/Gallery/Gallery";

const App = () => {
    return (<div className="">
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={Home} />
            </Routes>
            <Routes>
                <Route path='/Hotels' Component={Listing} />
            </Routes>
            <Routes>
                <Route path='/Packages' Component={Packages} />
            </Routes>
            <Routes>
                <Route path='/Gallery' Component={Gallery} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>)
}
export default App