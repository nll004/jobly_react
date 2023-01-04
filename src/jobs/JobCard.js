import React from "react";
import { Link } from "react-router-dom";

function JobCard({job: j}) {
    return (
        <div id={`job-${j.id}`}>
            <h3>{j.title}</h3>
            <p> Salary: {j.salary || "N/A"} </p>
            <p> Company:
                <Link to={`company/${j.companyHandle}`}>
                    {j.companyName}
                </Link>
            </p>
        </div>
    )
};

export default JobCard;
