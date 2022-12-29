import React, {useState} from "react";
import JoblyApi from "../api";

function RegistrationForm({hideForm}){
    const [formData, setFormData] = useState();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({...fData, [name]: value }));
    };
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const userToken = await JoblyApi.request('auth/register', formData, 'post');
        JoblyApi.token = userToken;
        evt.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
                <input  type='text'
                        placeholder="Create an username"
                        required
                        name="username"
                        onChange={handleChange}/>
                <input  type='text'
                        placeholder="Enter your first name"
                        required
                        name="firstName"
                        onChange={handleChange}/>
                <input  type='text'
                        placeholder="Enter your last name"
                        required
                        name="lastName"
                        onChange={handleChange}/>
                <input  type='email'
                        placeholder="Enter your email"
                        required
                        name="email"
                        onChange={handleChange}/>
                <input  type='password'
                        placeholder="Create a password"
                        required
                        name="password"
                        onChange={handleChange}/>
            <button> Save </button>
            <button onClick={hideForm}> Cancel </button>
        </form>
    )
};

export default RegistrationForm;
