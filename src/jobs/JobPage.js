import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { JoblyApi } from "../apis/joblyApi";
import UserContext from "../context-hooks/UserContext";
import "../App.css";
import "./Jobs.css";

function JobDetailPage() {
    const { id } = useParams();
    const {currentUser} = useContext(UserContext);
    const [applied, setApplied] = useState(null);
    const [job, setJob] = useState(null);

    console.debug("JobDetailPage", "jobId=", id, "currentUser", currentUser);

    useEffect(() => {
        async function getJobById() {
            setJob(await JoblyApi.getJob(id));
        };
        getJobById();
    }, [id]);

    useEffect(() => { // on every render check to see if user has applied to this job
        if(currentUser){
            for(let app of currentUser.applications){
                if(app == id){ // param id is a string, app is a integer
                    setApplied(true);
                }
            }
        }
    });

    async function handleClick() {
        try{
            await JoblyApi.applyToJob(currentUser.username, id);
            setApplied(true);
        } catch(errors){
            console.error(errors);
        }
    }

    if (job) return (
        <>
            <h1 className="App-page-title"> Job Details </h1>
            <div className="JobPage-job-container">
                <h2 className="JobPage-job-title">
                    {job.title}
                </h2>
                <p> Salary: ${job.salary || "-"} </p>
            {job.equity &&
                <p>  Equity option available  </p>
                }
                <p> Company:
                    <Link to={`/companies/${job.company.handle}`}> {job.company.name} </Link>
                </p>
                <Link to={`/jobs`}
                      className='JobPage-return-link'>
                    Back to results
                </Link>
            {(currentUser && !applied) &&
                <button onClick={handleClick}
                        className='JobPage-apply-btn'>
                    Apply
                </button> }
            {(currentUser && applied) &&
                <div className="JobPage-applied">
                    Applied
                </div>}
            </div>
        </>
    )
    else return (<h5>Sorry something went wrong.</h5>)
};

export default JobDetailPage;
