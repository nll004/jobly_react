import React from "react";
import { JOBLY_FRONTEND_URL } from "../apis/api";

function JobCard({job: j}) {
    return (
        <div id={`job-${j.id}`}>
            <h3>{j.title}</h3>
            <p> Salary: {j.salary || "N/A"} </p>
            <p> Company:
                <a href={`${JOBLY_FRONTEND_URL}/companies/${j.companyHandle}`}>
                    {j.companyName}
                </a>
            </p>
        </div>
    )
};

export default JobCard;
