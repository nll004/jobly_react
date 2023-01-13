import React, { useEffect, useState } from 'react';
import RouteList from './routes-nav/RouteList';
import Nav from './routes-nav/NavBar';
import { JoblyApi } from './apis/joblyApi';
import UserContext from './context-hooks/UserContext';
import AuthFuncContext from './context-hooks/AuthFuncContext';
import jwt from "jsonwebtoken";

const JOBLY_TOKEN_STORAGE_ID = 'JT_ID';

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [joblyToken, setJoblyToken] = useState(null);

    useEffect(() => {
        // If token in state, refresh token in local storage and getUserData
        if (joblyToken) {
            console.debug('useEffect -> token exists')
            localStorage.setItem(JOBLY_TOKEN_STORAGE_ID, joblyToken);
            let { username } = jwt.decode(joblyToken);
            getAndSaveCurrentUser(username);
        }
        else {
            // If no token in state, check local storage for saved token. Allows for persistent login
            console.debug('useEffect -> no token')
            const savedToken = localStorage.getItem(JOBLY_TOKEN_STORAGE_ID);
            if (savedToken) {
                setJoblyToken(savedToken);
                JoblyApi.token = savedToken;
            }
            else setCurrentUser(null);
        };
    }, [joblyToken]);

    async function getAndSaveCurrentUser(username) {
        try {
            const userData = await JoblyApi.getUser(username);
            setCurrentUser(userData);
        }
        catch (errors) {
            console.error('failed getAndSaveCurrentUser->', errors);
        }
    };

    async function registerNewUser(loginInfo) {
        try {
            const token = await JoblyApi.signup(loginInfo);
            setJoblyToken(token);
            return {success: true}
        }
        catch (errors) {
            console.error('failed registerNewUser->', errors);
            return {success: false, errors}
        };
    };

    async function userLogin(loginInfo) {
        try {
            const token = await JoblyApi.login(loginInfo);
            setJoblyToken(token);
            return {success : true}
        }
        catch (errors) {
            console.error('failed userLogin->', errors);
            return {success : false, errors}
        }
    };

    function userLogout() {
        localStorage.removeItem(JOBLY_TOKEN_STORAGE_ID);
        setJoblyToken(false);
    };

    return (
        <AuthFuncContext.Provider value={{ userLogin, userLogout, registerNewUser }}>
            <UserContext.Provider value={{ currentUser, joblyToken }}>
                <div className="App">
                    <Nav />
                    <RouteList />
                </div>
            </UserContext.Provider>
        </AuthFuncContext.Provider>
    );
}

export default App;
