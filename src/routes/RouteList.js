import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import RegistrationForm from "../forms/RegistrationForm";
import LoginForm from "../forms/LoginForm";

function RouteList(){
    return (
        <Routes>
            <Route path="" element={<HomePage />}>
                <Route path="login" element={ <LoginForm /> } />
                <Route path="signup"  element={ <RegistrationForm /> }/>
            </Route>
            <Route path="jobs" element={<h1> Job List </h1>}/>
            <Route path="companies" element={<h1>Company list</h1>}/>
            <Route path="companies/:name" element={<h1> Company Profile </h1>}/>
            <Route path="profile/:username" element={<h1> User Profile </h1>}/>
            <Route path="*" element={<h1> 404 </h1>}/>
        </Routes>
    )
}

export default RouteList;