import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Listing from "./Pages/Listings/Listings"
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Packages from "./Pages/Packages/Packages";
import Gallery from "./Pages/Gallery/Gallery";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
const App = () => {
    return (<div className="">
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Hotels' element={<Listing />} />
                <Route path='/Packages' element={<Packages />} />
                <Route path='/Gallery' element={<Gallery />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/SignUp' element={<SignUp />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>)
}
export default App