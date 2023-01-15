import React from "react";
import { Link } from "react-router-dom";
import "./Companies.css";

function CompanyCard({company: c}){
    return(
        <div className="Company-card-container">
            <Link to={`${c.handle}`}
                  style={{textDecoration: "none"}}>
                <div className='Company-card'>
                    <h3 className="Company-card-title">
                        {`${c.name}`}
                    </h3>
                    <p className="Company-card-details">
                        {c.description}
                    </p>
                    <p className="Company-card-details">
                        Employees: {c.numEmployees}
                    </p>
                </div>
            </Link>
        </div>
    )
};

export default CompanyCard;
