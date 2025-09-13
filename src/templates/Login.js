import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FacebookSDKLoader, handleFacebookLogin } from '../components/FacebookSSO';
import handleGoogleLogin from '../components/GoogleSSO';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import CriarConta from './CriarConta';
import '../static/style.css';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isCriando, setIsCriando] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const emailRef = useRef(null);
  const errorRef = useRef(null);

  useEffect(() => { emailRef.current?.focus(); }, []);

  const handleLogin = async () => {
    setErro('');
    if (!loginEmail || !senha) {
      setErro('Por favor, preencha seu e-mail e sua senha.');
      errorRef.current?.focus();
      return;
    }

    setIsLoading(true);
    try {
      const { data: usuario } = await axios.get(
        `http://172.16.13.234:8080/user/${loginEmail}`
      );
      if (usuario?.senha === senha) {
        login(usuario);          // evita race com setState
        navigate('/home');
      } else {
        setErro('Credenciais inválidas. Tente novamente.');
        errorRef.current?.focus();
      }
    } catch {
      setErro('Não foi possível conectar ao servidor. Tente novamente mais tarde.');
      errorRef.current?.focus();
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isLoading) handleLogin();
  };

  const switchCriando = () => setIsCriando((p) => !p);

  if (isCriando) {
    return (
      <div className="auth-page">
        <div className="auth-card" role="region" aria-label="Criar conta">
          <button className="link-like" onClick={switchCriando} aria-label="Voltar para login">
            ← Voltar
          </button>
          <CriarConta />
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card" role="form" aria-labelledby="login-title">
        <form className="auth-grid" onSubmit={onSubmit} autoComplete="on">
          {/* Header ocupa linha própria na grid */}
          <header className="auth-header">
            <img
              src="https://static.vecteezy.com/system/resources/previews/029/338/059/non_2x/3d-home-sweet-home-and-pink-hearts-on-a-transparent-background-free-png.png"
              alt="Logo do aplicativo"
              className="auth-logo"
            />
            <h1 id="login-title" className="auth-title">Bem-vindo(a)!</h1>
            <p className="auth-subtitle">Entre para continuar</p>
            {erro && (
              <div
                ref={errorRef}
                className="auth-error"
                role="alert"
                aria-live="assertive"
                tabIndex={-1}
              >
                {erro}
              </div>
            )}
          </header>

          {/* Linha do E-mail (ESQUERDA) */}
          <div className="email-row">
            <label htmlFor="email" className="auth-label">E-mail</label>
            <input
              id="email"
              ref={emailRef}
              className="auth-input"
              type="email"
              inputMode="email"
              placeholder="seu@email.com"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              aria-required="true"
            />
          </div>

          {/* Coluna Direita (SSO) — ALINHADA com o label “E-mail” */}
          <aside className="sso-col">
            <FacebookSDKLoader />
            <div className="sso-grid">
              <button type="button" onClick={handleFacebookLogin} className="btn btn-outline">
                Entrar com Facebook
              </button>
              <button type="button" onClick={handleGoogleLogin} className="btn btn-outline">
                Entrar com Google
              </button>
            </div>
            <div className="divider" aria-hidden="true">ou</div>
            <p className="help-text">Dica: você pode pressionar <kbd>Enter</kbd> para entrar.</p>
          </aside>

          {/* Restante do formulário (abaixo do e-mail) */}
          <div className="rest-col">
            <label htmlFor="senha" className="auth-label">Senha</label>
            <div className="auth-password-row">
              <input
                id="senha"
                className="auth-input"
                type={mostrarSenha ? 'text' : 'password'}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                aria-required="true"
              />
              <button
                type="button"
                className="auth-toggle"
                aria-pressed={mostrarSenha}
                onClick={() => setMostrarSenha((p) => !p)}
              >
                {mostrarSenha ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? 'Entrando…' : 'Entrar'}
            </button>
            <button type="button" className="btn btn-dark" onClick={switchCriando}>
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
