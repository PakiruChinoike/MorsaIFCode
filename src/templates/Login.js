import { useAuth } from '../components/AuthContext';
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
      <img src="https://static.vecteezy.com/system/resources/previews/029/338/059/non_2x/3d-home-sweet-home-and-pink-hearts-on-a-transparent-background-free-png.png" alt="Logo" className="login-logo" />
      <h2 className="login-title">Bem-Vindo(a)!</h2>
      <FacebookSDKLoader />
      <button onClick={handleFacebookLogin} className="login-button facebook-button">Login with Facebook</button>
      <button onClick={handleGoogleLogin} className="login-button google-button">
        Login with Google
      </button>
      <div>_______________</div>
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>);
}

export default Login;
