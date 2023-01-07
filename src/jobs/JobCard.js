import React from "react";
import { Link } from "react-router-dom";

function JobCard({job: j}) {
    return (
        <div id={`job-${j.id}`}>
            <h3>
                <Link to={`/jobs/${j.id}`}> {j.title} </Link>
            </h3>
            <p> Salary: {j.salary || "N/A"} </p>
            {j.companyName &&
                <p> Company:
                    <Link to={`/companies/${j.companyHandle}`}> {j.companyName} </Link>
                </p>}
        </div>
    )
};

export default JobCard;
