import React, {useState, useEffect} from "react";
import {JoblyApi} from "../apis/joblyApi";
import SearchForm from "../forms/SearchForm";
import JobCard from "./JobCard";

function JobList(){
    const [jobList, setJobList] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [formData, setFormData] = useState(null)

    useEffect(() => {
        async function getJobs(){
            const res = await JoblyApi.searchJobs(searchQuery);
            setJobList(res);
        };
        getJobs();
    }, [searchQuery]);

    function handleChange(evt){
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name] : value }));
    };

    function submitJobSearch(evt){
        evt.preventDefault();
        setSearchQuery(formData);
        evt.target.reset();
        setFormData(null);
    };

    return (
        <>
            <h1>Job Postings</h1>
            <SearchForm inputName='title' changeFunc={handleChange} searchFunc={submitJobSearch}/>
            <div>
                {jobList && jobList.map((j) => <JobCard key={j.id} job={j} /> )}
                {!jobList && <h6>Loading...</h6>}
                {jobList && jobList.length === 0 && <h6>No jobs found. Edit your search criteria and try again.</h6> }
            </div>
        </>
    )
};

export default JobList;
