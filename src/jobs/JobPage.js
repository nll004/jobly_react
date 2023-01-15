import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { JoblyApi } from "../apis/joblyApi";
import "../App.css";
import "./Jobs.css";

function JobDetailPage() {
    const { id } = useParams();
    console.debug("JobDetailPage", "jobId=", id);
    // need user to see if the person has applied already
    // need apply function

    const [job, setJob] = useState(null);

    useEffect(() => {
        async function getJobById() {
            setJob(await JoblyApi.getJob(id));
        };
        getJobById();
    }, [id]);

    async function handleClick() {
        // apply
        console.log('applied')
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
                <button onClick={handleClick}
                        className='JobPage-apply-btn'>
                    Apply
                </button>
            </div>
        </>
    )
    else return (<h5>Sorry something went wrong.</h5>)
};

export default JobDetailPage;
