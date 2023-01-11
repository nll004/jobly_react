import React, {useContext} from "react";
import { NavLink, Link } from 'react-router-dom';
import UserContext from "../context-hooks/UserContext";
import AuthFuncContext from "../context-hooks/AuthFuncContext";

function Nav(){
    const {currentUser} = useContext(UserContext);
    const {userLogout} = useContext(AuthFuncContext);

    return (
        <nav>
            <Link to='/'> Jobly </Link>
            <ul>
                <NavLink to='/jobs'> Jobs </NavLink>
                <NavLink to='/companies'> Companies </NavLink>
                {currentUser && <>
                    <NavLink to={`/profile/${currentUser.username}`}> Profile </NavLink>
                    <button onClick={userLogout}> Logout </button>
                </>}
            </ul>
        </nav>
    )
}

export default Nav;
