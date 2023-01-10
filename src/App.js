import React, {useEffect, useState} from 'react';
import RouteList from './routes-nav/RouteList';
import Nav from './routes-nav/NavBar';
import { JoblyApi } from './apis/joblyApi';
import UserContext from './context-hooks/UserContext';
import AuthFuncContext from './context-hooks/AuthFuncContext';
import jwt from "jsonwebtoken";

const JOBLY_TOKEN_STORAGE_ID = 'JOBLY_TOKEN';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [joblyToken, setJoblyToken] = useState(null);

  useEffect(()=>{
    if(joblyToken) {
      // refresh token in local storage
      localStorage.setItem(JOBLY_TOKEN_STORAGE_ID, joblyToken);
      let {username} = jwt.decode(joblyToken);
      getAndSaveCurrentUser(username);
    }
    else {
      // check for saved token
      const savedToken = localStorage.getItem(JOBLY_TOKEN_STORAGE_ID);
      savedToken ? setCurrentUser(savedToken) : setCurrentUser(null);
    }
  }, [joblyToken]);

  async function getAndSaveCurrentUser(username){
    const userData = await JoblyApi.getUser(username);
    setCurrentUser(userData);
  };

  async function registerNewUser(loginInfo){
    const token = await JoblyApi.signup(loginInfo);
    setJoblyToken(token);
  };

  async function userLogin(loginInfo){
    const token = await JoblyApi.login(loginInfo);
    setJoblyToken(token);
  };

  function userLogout(){
    setJoblyToken(null);
    localStorage.removeItem(JOBLY_TOKEN_STORAGE_ID)
  };

  return (
    <AuthFuncContext.Provider value={{userLogin, userLogout, registerNewUser}}>
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
