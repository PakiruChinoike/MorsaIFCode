import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../static/style.css';
import { handleFacebookLogin, FacebookSDKLoader } from '../components/FacebookSSO';
import handleGoogleLogin from '../components/GoogleSSO';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <FacebookSDKLoader />
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
      <button onClick={handleGoogleLogin} className="login-button google-button">
        Login with Google
      </button>
      <button onClick={handleLogin}>Login</button>
    </div>);
}

export default Login;
