import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {JoblyApi} from "../apis/joblyApi";
import JobCard from "../jobs/JobCard";
import "../App.css";

function CompanyProfile(){
    const { name: handle } = useParams();
    console.debug("CompanyDetail", "name=", handle);

    const [company, setCompany] = useState(null);

    useEffect(function getCompanyAndJobsForUser() {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle));
        };
        getCompany();
    }, [handle]);

    if(company) {
        return (
            <div>
                <h1 className="App-page-title">
                    Company Info
                </h1>
                <h2 className="Company-title">
                    {company.name}
                </h2>
                <p className="Company-prof-details">
                    {company.description}
                </p>
                <p className="Company-prof-details">
                    Employees: {company.numEmployees || 'N/A'}
                </p>
                <h3 className="Company-prof-job-list-heading">
                    Current Job Postings
                </h3>
                <div className="Company-prof-job-list">
                    {company.jobs.map((j) => <JobCard job={j} /> )}
                </div>

            </div>
        )
    }
    else return (<h5>Something went wrong. Please try again.</h5>)

};

export default CompanyProfile;
