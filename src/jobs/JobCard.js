import React from "react";
import CustomLink from "../routes-nav/CustomLink";

function JobCard({job: j}) {
    return (
        <div id={`job-${j.id}`}>
            <h3>
                <CustomLink route={`jobs/${j.id}`} text={j.title}/>
            </h3>
            <p> Salary: {j.salary || "N/A"} </p>
            {j.companyName &&
                <p> Company:
                    <CustomLink route={`companies/${j.companyHandle}`} text={j.companyName}/>
                </p>}
        </div>
    )
};

export default JobCard;
