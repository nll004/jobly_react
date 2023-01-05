import React, {useState, useEffect} from "react";
import {JoblyApi} from "../apis/api";
import JobCard from "./JobCard";

function JobList(){
    const [jobList, setJobList] = useState(null);

    useEffect(() => {
        async function getJobs(){
            const res = await JoblyApi.getAllJobs();
            setJobList(res);
        };
        getJobs();
    }, []);

    return(
        <>
        <h1>Job Postings</h1>
            {jobList && jobList.map((j) => <JobCard key={j.id} job={j} /> )}
        </>
    )
};

export default JobList;
