import React, {useState} from "react";

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
                        name='username'
                        placeholder="Username"
                        onChange={handleChange}
                    />
                <input  type='password'
                        name='password'
                        placeholder="Password"
                        onChange={handleChange}
                    />
            <button> Login </button>
            <button onClick={hideForm}> Cancel </button>
        </form>
    )
};

export default LoginForm;
