import React from "react";
import CustomLink from "../routes-nav/CustomLink";

function CompanyCard({company: c}){
    return(
        <div id={c.handle}>
            <CustomLink route={`companies/${c.handle}`} text={c.name}/>
            <p>Description: {c.description}</p>
            <p>Employees: {c.numEmployees}</p>
        </div>
    )
};

export default CompanyCard;
