import React, {useState, useContext} from "react";
import UserContext from "../context-hooks/UserContext";
import AuthFuncContext from "../context-hooks/AuthFuncContext";
import LoginForm from "../forms/LoginForm";
import RegistrationForm from "../forms/RegistrationForm";

function HomePage() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);
    const {currentUser} = useContext(UserContext);
    const {logout} = useContext(AuthFuncContext);

    function toggleLoginForm() {
        setShowLoginForm(current => !current);
        if(showSignupForm) setShowSignupForm(false);
    };
    function toggleSignupForm() {
        setShowSignupForm(current => !current);
        if(showLoginForm) setShowLoginForm(false);
    };

    return (
        <>
            <p>Welcome to Jobly. Your dream job is just a click away! </p>
        {currentUser && <button onClick={logout}> Logout </button> }
        {!currentUser &&
            <div>
                <button onClick={toggleLoginForm}> Login </button>
                <button onClick={toggleSignupForm}> Create Account </button>
            </div>
        }
        {showLoginForm && <LoginForm showForm={setShowLoginForm} />}
        {showSignupForm && <RegistrationForm showForm={setShowSignupForm} />}
        </>
    )
};

export default HomePage;
