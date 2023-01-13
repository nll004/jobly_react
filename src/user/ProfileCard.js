import React from "react";
import "./Profile.css";

function ProfileCard({user: u}) {
    return (
        <div className="Prof-card">
            <p className="Prof-details">
                Username:
                <span className="Prof-span"> {u.username}  </span>
            </p>
            <p className="Prof-details">
                First Name:
                <span className="Prof-span"> {u.firstName} </span>
            </p>
            <p className="Prof-details">
                Last Name:
                <span className="Prof-span"> {u.lastName} </span>
            </p>
            <p className="Prof-details">
                Email:
                <span className="Prof-span"> {u.email} </span>
            </p>
        </div>
    )
};

export default ProfileCard;
