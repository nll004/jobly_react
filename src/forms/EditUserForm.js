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

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log('handleSubmit', user.username)
        const userData = await JoblyApi.editUser(user.username, formData);
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        showForm(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label> First Name:
                <input  type='text'
                        placeholder="Enter your first name"
                        required
                        name="firstName"
                        value={formData.firstName}
                        autoComplete="given-name"
                        onChange={handleChange}/>
            </label>
            <label>
                <input  type='text'
                        placeholder="Enter your last name"
                        required
                        name="lastName"
                        value={formData.lastName}
                        autoComplete="family-name"
                        onChange={handleChange}/>
            </label>
            <button> Save </button>
        </form>
    )
}

export default EditUserForm;
