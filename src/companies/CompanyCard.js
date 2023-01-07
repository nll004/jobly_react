import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({company: c}){
    return(
        <div id={c.handle}>
            <Link to={`${c.handle}`}> {c.name} </Link>
            <p>Description: {c.description}</p>
            <p>Employees: {c.numEmployees}</p>
        </div>
    )
};

export default CompanyCard;
