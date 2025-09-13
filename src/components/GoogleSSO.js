import { GoogleLogin } from 'react-google-login';

const handleGoogleLogin = (response) => {
    console.log('Google login response:', response);
};

const GoogleSSO = () => {
    return (
        <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Login with Google"
            onSuccess={handleGoogleLogin}
            onFailure={(error) => console.error('Google login failed:', error)}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default handleGoogleLogin;