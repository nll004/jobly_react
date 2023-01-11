import React, { useContext, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { JoblyApi } from "../apis/joblyApi";
import UserContext from "../context-hooks/UserContext";
import AuthFuncContext from "../context-hooks/AuthFuncContext";
import EditUserForm from "../forms/EditUserForm";

function UserProfilePage(){
    const {username: paramUsername} = useParams();
    const {currentUser} = useContext(UserContext);
    const {userLogout} = useContext(AuthFuncContext);
    const [showForm, setShowForm] = useState(false);

    if(currentUser && currentUser.username !== paramUsername || !currentUser) return <Navigate to='/' replace={true}/>

    async function handleDelete(){
        await JoblyApi.deleteUser(currentUser.username);
        userLogout();
    };

    return (
        <>
            {currentUser && <>
                <h1>Welcome {currentUser.username}</h1>
                <p>First Name: {currentUser.firstName}</p>
                <p>Last Name: {currentUser.lastName}</p>
                <p>Email: {currentUser.email}</p>
                <button onClick={()=>setShowForm(current => !current)}> Edit </button>
                <button onClick={handleDelete}> Delete User </button>
                {showForm && <EditUserForm showForm={setShowForm} user={currentUser}/>}
            </>}
        </>
    )
};

export default UserProfilePage;
