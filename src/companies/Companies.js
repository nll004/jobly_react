import React, {useState, useEffect} from "react";
import {JoblyApi} from "../apis/joblyApi";
import CompanyCard from "./CompanyCard";
import SearchForm from "../forms/SearchForm";

function CompanyList() {
    const [companyList, setCompanyList] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [formData, setFormData] = useState(null);

    useEffect(()=> {
        async function getCompanies() {
            const res = await JoblyApi.searchCompanies(searchQuery);
            setCompanyList(res);
        };
        getCompanies();
    }, [searchQuery]);

    function handleChange(evt){
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name] : value }));
    };

    function submitCompanySearch(evt){
        evt.preventDefault();
        setSearchQuery(formData);
        evt.target.reset();
        setFormData(null);
    };

    return (
        <>
            <h1>Company List</h1>
            <SearchForm inputName='name' changeFunc={handleChange} searchFunc={submitCompanySearch}/>
            <div>
                {companyList &&
                    companyList.map((c) => <CompanyCard key={c.handle} company={c} /> )}
                {!companyList &&
                    <h6>Loading...</h6>}
                {companyList && companyList.length === 0 &&
                    <h6>No companies found. Edit your search criteria and try again.</h6> }
            </div>
        </>
    )
};

export default CompanyList;
