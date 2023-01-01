import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import CompanyList from "./Companies";
import JobList from "./Jobs";

function RouteList(){
    return (
        <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="jobs" element={<JobList />}/>
            <Route path="companies" element={<CompanyList />} />
            <Route path="companies/:name" element={<h1> Company Profile </h1>}/>
            <Route path="profile/:username" element={<h1> User Profile </h1>}/>
            <Route path="*" element={<h1> 404 </h1>}/>
        </Routes>
    )
};

export default RouteList;
