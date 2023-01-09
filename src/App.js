import React, {useEffect, useState, useRef} from 'react';
import RouteList from './routes-nav/RouteList';
import Nav from './routes-nav/NavBar';
import { JoblyApi } from './apis/joblyApi';
import UserContext from './context-hooks/UserContext';
import AuthFuncContext from './context-hooks/AuthFuncContext';
import jwt from "jsonwebtoken";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [joblyToken, setJoblyToken] = useState(null);
  const username = useRef(null);

  useEffect(()=>{
    if(joblyToken) {
      getAndSaveCurrentUser();
    }
    else {
      setCurrentUser(null);
    }
  }, [joblyToken]);

  /** Uses username at login to retrieve and store user data. */
  async function getAndSaveCurrentUser(){
    const token = await JoblyApi.getUser(username.current);
    setCurrentUser(token);
  };

  async function registerNewUser(loginInfo){
    const token = await JoblyApi.signup(loginInfo);
    username.current = loginInfo.username;
    setJoblyToken(token);
  };

  async function login(loginInfo){
    const token = await JoblyApi.login(loginInfo);
    username.current = loginInfo.username;
    setJoblyToken(token);
  };

  function logout(){
    setJoblyToken(null);
    JoblyApi.token = null;
  };

  return (
    <AuthFuncContext.Provider value={{login, logout, registerNewUser}}>
      <UserContext.Provider value={{currentUser, joblyToken}}>
        <div className="App">
          <Nav />
          <RouteList />
        </div>
      </UserContext.Provider>
    </AuthFuncContext.Provider>
  );
}

export default App;
