import React, {useState} from "react";
import LoginForm from "../forms/LoginForm";
import RegistrationForm from "../forms/RegistrationForm";

function HomePage() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);

    function toggleLoginForm(evt) {
        evt.preventDefault();
        setShowLoginForm(current => !current);
        if(showSignupForm) setShowSignupForm(false);
    };
    function toggleSignupForm(evt) {
        evt.preventDefault();
        setShowSignupForm(current => !current);
        if(showLoginForm) setShowLoginForm(false);
    };

    return (
        <>
        <h1>Jobly</h1>
        <p>Home page demo</p>
        <button onClick={toggleLoginForm} > Login </button>
        <button onClick={toggleSignupForm} > Signup </button>

        {showLoginForm && <LoginForm hideForm={toggleLoginForm} />}
        {showSignupForm && <RegistrationForm hideForm={toggleSignupForm} />}
        </>
    )
};

export default HomePage;
