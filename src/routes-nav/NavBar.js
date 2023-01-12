import React, {useContext} from "react";
import { NavLink, Link } from 'react-router-dom';
import UserContext from "../context-hooks/UserContext";
import AuthFuncContext from "../context-hooks/AuthFuncContext";
import "./NavBar.css";

function Nav(){
    const {currentUser} = useContext(UserContext);
    const {userLogout} = useContext(AuthFuncContext);

    return (
        <nav>
            <Link   to='/'
                    id='navbar-logo'>
                Jobly
            </Link>
            <ul className='navlink-container'>
                <NavLink to='/jobs'
                         className='navlink'>
                    Jobs
                </NavLink>
                <NavLink to='/companies'
                         className='navlink'>
                    Companies
                </NavLink>
            {currentUser && <>
                <NavLink to={`/profile/${currentUser.username}`}
                         className='navlink'>
                    Profile
                </NavLink>
                <button  onClick={userLogout}
                         className="navlink"
                         id='navbar-logout-btn' >
                    Logout
                </button>
                </>}
            </ul>
        </nav>
    )
};

export default Nav;
