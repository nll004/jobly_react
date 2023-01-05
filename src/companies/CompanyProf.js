import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {JoblyApi} from "../apis/api";
import CompanyCard from "./CompanyCard";
import JobCard from "../jobs/JobCard";

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

    if(company) return (
        <div>
          <h3>Company Profile</h3>
            <p>{company.name}</p>
            <p>{company.description}</p>
            <p>Employees: {company.numEmployees || 'N/A'}</p>
          <h4>Available Jobs</h4>
            {company.jobs.map((j) => <JobCard job={j} /> )}
        </div>
    );
};

export default CompanyProfile;
