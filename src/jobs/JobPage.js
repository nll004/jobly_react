import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { JoblyApi } from "../apis/api";

function JobDetailPage(){
    const { id } = useParams();
    console.debug("JobDetailPage", "jobId=", id);

    const [job, setJob] = useState(null);

    useEffect(() => {
        async function getJobById() {
          setJob(await JoblyApi.getJob(id));
        };
        getJobById();
      }, [id]);

    if (job) return (
        <>
        <h1>Job Detail Page</h1>
        <h2>{job.title}</h2>
        <p>Salary: ${job.salary || "-"}</p>
        {job.equity && <p>Equity option available</p>}
        <Link to={`/companies/${job.company.handle}`}> {job.company.name} </Link>
        </>
    )
};

export default JobDetailPage;
