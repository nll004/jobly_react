import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

function CompanyList() {
    const [companyList, setCompanyList] = useState(null);

    useEffect(() => {
        async function getCompanies() {
            const companies = await JoblyApi.getAllCompanies();
            setCompanyList(companies);
        };
        getCompanies();
    }, []);

    return (
        <>
            <h1>Company List</h1>
            <div>
                {companyList && companyList.map((c) => <CompanyCard key={c.handle} company={c} /> )}
            </div>
        </>
    )
};

export default CompanyList;
