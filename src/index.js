import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoginPage } from "./components/LoginPage";
import { AboutUs } from "./components/AboutUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./app/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router basename="/test">
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/about" element={<AboutUs/>} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>
);
