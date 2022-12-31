import React from "react";

function CompanyList({companies}) {
    return (
        <div>
            <h1>Company List</h1>
            {companies.map(com => { <li>{com}</li> })}
        </div>
    )
};

export default CompanyList;
