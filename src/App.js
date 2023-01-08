import React, {useEffect, useState, useRef} from 'react';
import RouteList from './routes-nav/RouteList';
import Nav from './routes-nav/NavBar';
import { JoblyApi } from './apis/joblyApi';
import UserContext from './context-hooks/UserContext';
import AuthFuncContext from './context-hooks/AuthFuncContext';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [joblyToken, setJoblyToken] = useState(null);
  const username = useRef(null);

  useEffect(()=>{
    if(joblyToken) {
      async function getAndSaveCurrentUser(){
        const res = await JoblyApi.getUser(username.current);
        setCurrentUser(res);
      };
      getAndSaveCurrentUser();
    }
    else {
      setCurrentUser(null);
    }
  }, [joblyToken]);

  async function login(loginInfo){
    const token = await JoblyApi.login(loginInfo);
    username.current = loginInfo.username;
    setJoblyToken(token);
  };

  function logout(){
    setJoblyToken(null);
  };

  return (
    <AuthFuncContext.Provider value={{login, logout}}>
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
