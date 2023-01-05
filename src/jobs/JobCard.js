import React from "react";
import { JOBLY_FRONTEND_URL } from "../apis/api";

function JobCard({job: j}) {
    return (
        <div id={`job-${j.id}`}>
            <h3>
                <a href={`${JOBLY_FRONTEND_URL}/jobs/${j.id}`}>
                    { j.title}
                </a>
            </h3>
            <p> Salary: {j.salary || "N/A"} </p>
            {j.companyName &&
                <p> Company:
                <a href={`${JOBLY_FRONTEND_URL}/companies/${j.companyHandle}`}>
                    {j.companyName}
                </a>
                </p>}
        </div>
    )
};

export default JobCard;
