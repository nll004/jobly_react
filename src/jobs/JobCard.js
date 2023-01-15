import React from "react";
import { Link } from "react-router-dom";
import "./Jobs.css";

function JobCard({job: j}) {
    return (
        <div className="JobCard-container">
            <Link   to={`/jobs/${j.id}`}
                    style={{ textDecoration: "none" }}>
                <div className='JobCard'>
                    <h3 className="JobCard-title">
                        {j.title}
                    </h3>
                    <p className="JobCard-details">
                        Salary: {j.salary || "N/A"}
                    </p>
                {j.companyName &&
                    <p className="JobCard-details">
                        Company: {j.companyName}
                    </p>}
                </div>
            </Link>
        </div>
    )
};

export default JobCard;
