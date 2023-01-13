import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthFuncContext from "../context-hooks/AuthFuncContext";

function RegistrationForm({ showForm }) {
    const [formData, setFormData] = useState();
    const redirect = useNavigate();
    const { registerNewUser } = useContext(AuthFuncContext);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({ ...fData, [name]: value }));
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await registerNewUser(formData);
        showForm(false);
        return redirect('/jobs');
    };
    return (
        <form onSubmit={handleSubmit}>
            <h3>Create an Account</h3>
            <h4>Error messages</h4>
            <input className="Form-input"
                type='text'
                placeholder="Create an username"
                required
                name="username"
                autoComplete="username"
                onChange={handleChange} />
            <input className="Form-input"
                type='text'
                placeholder="Enter your first name"
                required
                name="firstName"
                autoComplete="given-name"
                onChange={handleChange} />
            <input className="Form-input"
                type='text'
                placeholder="Enter your last name"
                required
                name="lastName"
                autoComplete="family-name"
                onChange={handleChange} />
            <input className="Form-input"
                type='email'
                placeholder="Enter your email"
                required
                name="email"
                autoComplete="email"
                onChange={handleChange} />
            <input className="Form-input"
                type='password'
                placeholder="Create a password"
                required
                name="password"
                autoComplete="new-password"
                onChange={handleChange} />
            <button className="Form-submit-btn">
                Get started
            </button>
            <button onClick={() => showForm(false)}
                className='Form-close-btn'>
                X
            </button>
        </form>
    )
};

export default RegistrationForm;
