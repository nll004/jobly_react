import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthFuncContext from "../context-hooks/AuthFuncContext";
import "./CommonForms.css";

function RegistrationForm({ showForm }) {
    const [formData, setFormData] = useState(null);
    const [errors, setErrors] = useState(null);
    const redirect = useNavigate();
    const { registerNewUser } = useContext(AuthFuncContext);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({ ...fData, [name]: value }));
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await registerNewUser(formData);
        if (result.success) return redirect('/jobs');
        else setErrors(result.errors);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="Form-header">Create an Account</h2>
            {errors && <p className="Form-error"> {errors[0]} </p>}
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
