import React from "react";
import "./Profile.css";

function DeletePrompt({ showForm, handleDelete}) {
    return (
        <div className="Prof-prompt-container">
            <p className="Prof-del-prompt">
                Are you sure you want to delete this user account?
            </p>
            <button onClick={handleDelete}
                className='Prof-btn'>
                Delete
            </button>
            <button onClick={() => showForm()}
                className='Prof-btn Prof-cancel-btn'>
                Cancel
            </button>
        </div>
    )
};

export default DeletePrompt;
