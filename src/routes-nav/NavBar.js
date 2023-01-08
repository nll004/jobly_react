import React, {useContext} from "react";
import { NavLink, Link } from 'react-router-dom';
import UserContext from "../context-hooks/UserContext";

function Nav(){
    const {currentUser} = useContext(UserContext);

    return (
        <nav>
            <Link to='/'> Jobly </Link>
            <ul>
                <NavLink to='/jobs'> Jobs </NavLink>
                <NavLink to='/companies'> Companies </NavLink>
                {currentUser && <NavLink to='/profile/:username'> Profile </NavLink> }
            </ul>
        </nav>
    )
}

export default Nav;
