import React, {useState} from "react";
import {JoblyApi} from "../apis/joblyApi";

function LoginForm({showForm}) {
    const [formData, setFormData] = useState();

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({ ...fData, [name]: value }));
    };

    async function handleSubmit(evt){
        evt.preventDefault();
        await JoblyApi.login(formData);
        evt.target.reset();
        showForm(false);
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
            <button onClick={()=>showForm(false)}> Cancel </button>
        </form>
    )
};

export default LoginForm;
