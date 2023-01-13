import React, { useContext, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { JoblyApi } from "../apis/joblyApi";
import EditUserForm from "../forms/EditUserForm";
import ProfileCard from "./ProfileCard";
import DeletePrompt from "./DeletePrompt";
import UserContext from "../context-hooks/UserContext";
import AuthFuncContext from "../context-hooks/AuthFuncContext";
import "./Profile.css";

function UserProfilePage(){
    const {username: paramUsername} = useParams();
    const {currentUser} = useContext(UserContext);
    const {userLogout} = useContext(AuthFuncContext);
    const [showEditForm, setShowEditForm] = useState(false);
    const [deletePrompt, setDeletePrompt] = useState(false);

    if (!currentUser || (currentUser.username !== paramUsername)) return <Navigate to='/' replace={true}/>

    function toggleEditForm() {
        setShowEditForm(current => !current);
        if(deletePrompt) setDeletePrompt(false);
    };

    function toggleDelPrompt() {
        setDeletePrompt(current => !current);
        if(showEditForm) setShowEditForm(false);
    };

    async function handleDelete() {
        await JoblyApi.deleteUser(currentUser.username);
        userLogout();
    };

    return (
        <>  {currentUser && <>
                <h1> Welcome {currentUser.firstName}</h1>
                <ProfileCard user={currentUser} />
                <button className="Prof-btn"
                        onClick={toggleEditForm}>
                    Edit
                </button>
                <button className='Prof-btn'
                        onClick={toggleDelPrompt}>
                    Delete User
                </button>
            {showEditForm && <EditUserForm showForm={toggleEditForm} user={currentUser} />}
            {deletePrompt && <DeletePrompt showForm={toggleDelPrompt} handleDelete={handleDelete} />}
            </>}
        </>
    )
};

export default UserProfilePage;
