import React, {useState} from "react";
import {JoblyApi} from "../apis/api";

function LoginForm({hideForm}) {
    const [formData, setFormData] = useState();

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({ ...fData, [name]: value }));
    };
    function handleSubmit(evt){
        evt.preventDefault();
        console.log('submitted', formData);
        // JoblyApi.request()
    };

    return (
        <form onSubmit={handleSubmit}>
                <input  type='text'
                        required
                        name='username'
                        placeholder="Username"
                        autoComplete="username"
                        onChange={handleChange}
                    />
                <input  type='password'
                        required
                        name='password'
                        placeholder="Password"
                        autoComplete='current-password'
                        onChange={handleChange}
                    />
            <button> Login </button>
            <button onClick={hideForm}> Cancel </button>
        </form>
    )
};

export default LoginForm;
