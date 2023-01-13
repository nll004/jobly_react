import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import AuthFuncContext from "../context-hooks/AuthFuncContext";
import "./LoginForm.css";

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
            <button onClick={()=>showForm(false)}
                    className='Form-close-btn'> X </button>
            <h3>Login</h3>
            <h4>Error messages</h4>
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
            <button className="Form-submit-btn"> Login </button>
        </form>
    )
};

export default LoginForm;
