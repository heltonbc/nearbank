import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const App = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Navbar handleCreatAcc={() => setShowModal(true)} />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/" element={<Home />} />
            </Routes>

            <Footer />
            <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
        </>
    );
};

export default App;
