import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import AuthFuncContext from "../context-hooks/AuthFuncContext";
import "./CommonForms.css";

function LoginForm({showForm}) {
    const [formData, setFormData] = useState();
    const redirect = useNavigate();
    const {userLogin} = useContext(AuthFuncContext);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({ ...fData, [name]: value }));
    };

    async function handleSubmit(evt){
        evt.preventDefault();
        userLogin(formData);
        evt.target.reset();
        showForm(false);
        return redirect('/jobs');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="Form-header"> Login </h2>
            <p className="Form-error">Error messages</p>
                <input  className="Form-input"
                        type='text'
                        required
                        name='username'
                        placeholder="Username"
                        autoComplete="username"
                        onChange={handleChange}
                    />
                <input  className="Form-input"
                        type='password'
                        required
                        name='password'
                        placeholder="Password"
                        autoComplete='current-password'
                        onChange={handleChange}
                    />
            <button className="Form-submit-btn">
                Login
            </button>
            <button onClick={() => showForm(false)}
                className='Form-close-btn'>
                X
            </button>
        </form>
    )
};

export default LoginForm;
