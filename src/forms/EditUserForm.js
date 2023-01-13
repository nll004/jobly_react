import React, {useState} from "react";
import { JoblyApi } from "../apis/joblyApi";

function EditUserForm({user, showForm}){
    const [formData, setFormData] = useState({
                                        firstName: user.firstName,
                                        lastName: user.lastName,
                                    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({...fData, [name]: value }));
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const resp = await JoblyApi.editUser(user.username, formData);
            user.firstName = resp.firstName;
            user.lastName = resp.lastName;
            showForm(false);
        } catch (errors) {
            console.error("failed to edit user->", errors);
        };
    };

    return (
        <div className="Form-container">
            <h3 className="Form-header"> Edit User </h3>
            <form onSubmit={handleSubmit}>
                <label  className="Form-label"
                        htmlFor="firstName">
                    First Name
                </label>
                <input  className="Form-input"
                        type='text'
                        placeholder="Enter your first name"
                        required
                        name="firstName"
                        value={formData.firstName}
                        autoComplete="given-name"
                        onChange={handleChange}/>

                <label  className="Form-label"
                        htmlFor="lastName">
                    Last Name
                </label>
                <input  className="Form-input"
                        type='text'
                        placeholder="Enter your last name"
                        required
                        name="lastName"
                        value={formData.lastName}
                        autoComplete="family-name"
                        onChange={handleChange}/>
                <button className="Form-submit-btn">
                    Save
                </button>
                <button onClick={() => showForm(false)}
                        className='Form-close-btn'>
                    X
                </button>
            </form>
        </div>
    )
}

export default EditUserForm;
