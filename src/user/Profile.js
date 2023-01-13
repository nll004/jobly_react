import React, { useContext, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { JoblyApi } from "../apis/joblyApi";
import EditUserForm from "../forms/EditUserForm";
import ProfileCard from "./ProfileCard";
import UserContext from "../context-hooks/UserContext";
import AuthFuncContext from "../context-hooks/AuthFuncContext";

function UserProfilePage(){
    const {username: paramUsername} = useParams();
    const {currentUser} = useContext(UserContext);
    const {userLogout} = useContext(AuthFuncContext);
    const [showForm, setShowForm] = useState(false);

    if (!currentUser || (currentUser.username !== paramUsername)) return <Navigate to='/' replace={true}/>

    async function handleDelete(){
        await JoblyApi.deleteUser(currentUser.username);
        userLogout();
    };

    return (
        <>  {currentUser && <>
                <h1> Welcome {currentUser.firstName}</h1>
                <ProfileCard user={currentUser} />
                <button className="Home-btn primary"
                        onClick={() => setShowForm(current => !current)}>
                    Edit
                </button>
                <button className='Home-btn secondary'
                        onClick={handleDelete}>
                    Delete User
                </button>
            {showForm && <EditUserForm showForm={setShowForm} user={currentUser}/>}
            </>}
        </>
    )
};

export default UserProfilePage;
