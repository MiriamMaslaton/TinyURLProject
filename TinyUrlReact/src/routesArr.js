import React from 'react';
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";
import NewUrl from './components/newUrl';
function RoutesArr() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<NewUrl/>} />
        </Routes>
    );
}

export default RoutesArr;
