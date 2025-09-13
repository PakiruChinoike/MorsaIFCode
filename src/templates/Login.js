import React from 'react';
import '../static/style.css';
import { handleFacebookLogin } from '../components/FacebookSSO';
import { handleGoogleLogin } from '../components/GoogleSSO';

function Login() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <button onClick={handleFacebookLogin} className="login-button facebook-button">
                Login with Facebook
            </button>
            <button onClick={handleGoogleLogin} className="login-button google-button">
                Login with Google
            </button>
        </div>
    );
}

export default Login;