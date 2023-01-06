import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { JoblyApi } from "../apis/api";
import CustomLink from "../routes-nav/CustomLink";

function JobDetailPage(){
    const { id } = useParams();
    console.debug("JobDetailPage", "jobId=", id);

    const [job, setJob] = useState(null);

    useEffect(() => {
        async function getJobById() {
          setJob(await JoblyApi.getJob(id));
        };
        getJobById();
        console.log(job)
      }, [id]);

    if (job) return (
        <>
        <h1>Job Detail Page</h1>
        <h2>{job.title}</h2>
        <p>Salary: ${job.salary || "-"}</p>
        {job.equity && <p>Equity option available</p>}
        <CustomLink route={`companies/${job.company.handle}`} text={job.company.name}/>
        </>
    )
};

export default JobDetailPage;
