import React, {useState, useEffect} from "react";
import {JoblyApi} from "../apis/api";
import CompanyCard from "./CompanyCard";

function CompanyList() {
    const [companyList, setCompanyList] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);

    useEffect(()=> {
        async function getCompanies() {
            const res = await JoblyApi.searchCompanies();
            setCompanyList(res);
        };
        getCompanies();
    }, []);

    function handleChange(evt){
        const {name, value} = evt.target;
        setSearchQuery(fData => ({...fData, [name] : value }));
    };

    function searchCompanies(evt){
        evt.preventDefault();
            async function searchCompanies() {
                const res = await JoblyApi.searchCompanies(searchQuery);
                setCompanyList(res);
            };
        searchCompanies();
        evt.target.reset();
        setSearchQuery(null);
    };

    return (
        <>
            <h1>Company List</h1>
            <form onSubmit={searchCompanies}>
                <input  type='text'
                        name="name"
                        placeholder="Search companies"
                        onChange={handleChange}
                        />
                <label htmlFor="minEmployees"> Minimum Employees </label>
                <input  type='number'
                        name="minEmployees"
                        min='1'
                        onChange={handleChange}
                        />
                <label htmlFor="maxEmployees"> Maximum Employees </label>
                <input  type='number'
                        name="maxEmployees"
                        min='1'
                        onChange={handleChange}
                        />
                <button> Search </button>
            </form>
            <div>
                {companyList && companyList.map((c) => <CompanyCard key={c.handle} company={c} /> )}
                {!companyList && <h6>Loading...</h6>}
                {companyList.length === 0 && <h6>No companies found. Edit your search criteria and try again.</h6> }
            </div>
        </>
    )
};

export default CompanyList;
