import React, {useState, useContext} from "react";
import UserContext from "../context-hooks/UserContext";
import AuthFuncContext from "../context-hooks/AuthFuncContext";
import LoginForm from "../forms/LoginForm";
import RegistrationForm from "../forms/RegistrationForm";
import "./Home.css";

function HomePage() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);
    const {currentUser} = useContext(UserContext);
    const {userLogout} = useContext(AuthFuncContext);

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
            <p className="Home-message">
                Welcome to Jobly. Your dream job is just a click away!
            </p>
            <div className="Home-btn-container">
                {currentUser &&
                    <button onClick={userLogout}
                            className='Home-btn primary'>
                        Logout
                    </button> }
                {!currentUser && <>
                    <button onClick={toggleLoginForm}
                            className='Home-btn primary'>
                        Login
                    </button>
                    <button onClick={toggleSignupForm}
                            className='Home-btn secondary'>
                        Create Account
                    </button> </>}
            </div>
            <div className="Home-form-container">
                {showLoginForm &&
                    <LoginForm  showForm={setShowLoginForm}
                                className='Home-form' />}
                {showSignupForm &&
                    <RegistrationForm showForm={setShowSignupForm}
                                      className='Home-form' />}
            </div>
        </>
    )
};

export default HomePage;
