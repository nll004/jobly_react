import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from '../homepage/Home';
import CompanyList from "../companies/Companies";
import CompanyProfile from "../companies/CompanyProf";
import JobList from "../jobs/Jobs";
import JobDetailPage from "../jobs/JobPage";

function RouteList(){
    return (
        <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="jobs" element={<JobList />}/>
            <Route path="jobs/:id" element={<JobDetailPage />}/>
            <Route path="companies" element={<CompanyList />} />
            <Route path="companies/:name" element={<CompanyProfile /> }/>
            <Route path="profile/:username" element={<h1> User Profile </h1>}/>
            <Route path="*" element={<h1> 404 </h1>}/>
        </Routes>
    )
};

export default RouteList;
