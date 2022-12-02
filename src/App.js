import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

// ----------------------------------------------------------

document.body.style.backgroundColor = "#F4F4F4";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const isLogged = name && account;

    const fakeAuth = {
        login(name, account, cb) {
            setName(name);
            setAccount(account);
            setTimeout(cb, 100);
        },
        logout(cb) {
            setName();
            setAccount();
            setTimeout(cb, 100);
        },
    };

    const PrivateRoute = ({ Component, logged }) => {
        return logged ? (
            <Component name={name} account={account} />
        ) : (
            <Navigate to="/login" />
        );
    };

    // ----------------------------------------------------------

    return (
        <div className="App">
            <Navbar
                handleCreateAcc={() => setShowModal(true)}
                logged={isLogged}
                auth={fakeAuth}
            />
            <Routes>
                <Route
                    path="/"
                    element={<Home handleClick={() => setShowModal(true)} />}
                />
                <Route path="/login" element={<Login auth={fakeAuth} />} />
                <Route
                    path="/dashboard/*"
                    element={<PrivateRoute Component={Dashboard} logged={isLogged} />}
                />
            </Routes>
            <Footer />
            <AccountModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                auth={fakeAuth}
            />
        </div>
    );
};
export default App;
