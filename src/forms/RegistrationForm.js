import React, {useState} from "react";
import {JoblyApi} from "../apis/api";

function RegistrationForm({showForm}){
    const [formData, setFormData] = useState();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({...fData, [name]: value }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await JoblyApi.signup(formData);
        evt.target.reset();
        showForm(false);
    };

    return (
        <form onSubmit={handleSubmit}>
                <input  type='text'
                        placeholder="Create an username"
                        required
                        name="username"
                        autoComplete="username"
                        onChange={handleChange}/>
                <input  type='text'
                        placeholder="Enter your first name"
                        required
                        name="firstName"
                        autoComplete="given-name"
                        onChange={handleChange}/>
                <input  type='text'
                        placeholder="Enter your last name"
                        required
                        name="lastName"
                        autoComplete="family-name"
                        onChange={handleChange}/>
                <input  type='email'
                        placeholder="Enter your email"
                        required
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}/>
                <input  type='password'
                        placeholder="Create a password"
                        required
                        name="password"
                        autoComplete="new-password"
                        onChange={handleChange}/>
            <button> Save </button>
            <button onClick={()=>showForm(false)}> Cancel </button>
        </form>
    )
};

export default RegistrationForm;
