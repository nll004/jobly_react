import React from "react";
import { NavLink } from 'react-router-dom';

function Nav(){
    return (
        <nav>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/jobs'> Jobs </NavLink>
            <NavLink to='/companies'> Companies </NavLink>
            <NavLink to='/profile/:username'> Profile </NavLink>
        </nav>
    )
}

export default Nav;
