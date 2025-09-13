import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../static/style.css';
import { handleFacebookLogin, FacebookSDKLoader } from '../components/FacebookSSO';
import handleGoogleLogin from '../components/GoogleSSO';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [user, setUser] = useState("")

  const handleLogin = () => {
    axios.get('')
        .then(response => {
            console.log(response.data)
            setUser(response.data)
        })
        .catch(error => {
            console.error(error)
        });

    login(user);
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label for='login'>E-mail:</label>
      <input type='text' name='login' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
      <label for='senha'>Senha:</label>
      <input type='text' name='senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
      <FacebookSDKLoader />
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
      <button onClick={handleGoogleLogin} className="login-button google-button">
        Login with Google
      </button>
    </div>);
}

export default Login;
