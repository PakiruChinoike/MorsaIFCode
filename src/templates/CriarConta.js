import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function CriarConta({ embedded = false }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [ok, setOk] = useState("");

  const nomeRef = useRef(null);
  const errorRef = useRef(null);

  useEffect(() => { nomeRef.current?.focus(); }, []);

  const emailEhValido = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleCadastro = async () => {
    setErro(""); setOk("");

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos."); errorRef.current?.focus(); return;
    }
    if (!emailEhValido(email)) {
      setErro("Informe um e-mail válido."); errorRef.current?.focus(); return;
    }
    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres."); errorRef.current?.focus(); return;
    }
    if (senha !== confirmarSenha) {
      setErro("As senhas não são iguais."); errorRef.current?.focus(); return;
    }

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("senha", senha);

    setIsLoading(true);
    try {
      const { data } = await axios.post("http://172.16.13.234:8080/cadastrar", formData);
      setOk("Conta criada com sucesso!");
      console.log(data);
      // opcional: limpar campos
      // setNome(""); setEmail(""); setSenha(""); setConfirmarSenha("");
    } catch (error) {
      console.error(error);
      setErro("Não foi possível criar a conta. Tente novamente.");
      errorRef.current?.focus();
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (e) => { e.preventDefault(); if (!isLoading) handleCadastro(); };

  const Card = (
    <div className="auth-card" role="region" aria-label="Criar conta">
      <h2 className="auth-title" style={{ textAlign: "center", marginTop: 0 }}>
        Crie sua conta
      </h2>
      <p className="auth-subtitle" style={{ textAlign: "center" }}>
        É rápido e gratuito
      </p>

      {erro && (
        <div
          ref={errorRef}
          className="auth-error"
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
          style={{ marginBottom: 8 }}
        >
          {erro}
        </div>
      )}
      {ok && (
        <div
          className="auth-success"
          role="status"
          aria-live="polite"
          tabIndex={-1}
          style={{ marginBottom: 8 }}
        >
          {ok}
        </div>
      )}

      <form className="signup-grid" onSubmit={onSubmit} autoComplete="on">
        <div className="field">
          <label htmlFor="nome" className="auth-label">Nome</label>
          <input
            id="nome"
            ref={nomeRef}
            className="auth-input"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            aria-required="true"
            placeholder="Seu nome completo"
          />
        </div>

        <div className="field">
          <label htmlFor="email" className="auth-label">E-mail</label>
          <input
            id="email"
            className="auth-input"
            type="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-required="true"
            placeholder="seu@email.com"
          />
        </div>

        <div className="field">
          <label htmlFor="senha" className="auth-label">Senha</label>
          <div className="auth-password-row">
            <input
              id="senha"
              className="auth-input"
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              aria-required="true"
              placeholder="Mínimo 6 caracteres"
            />
            <button
              type="button"
              className="auth-toggle"
              aria-pressed={mostrarSenha}
              onClick={() => setMostrarSenha((s) => !s)}
            >
              {mostrarSenha ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>

        <div className="field">
          <label htmlFor="confirmar" className="auth-label">Confirmar senha</label>
          <input
            id="confirmar"
            className="auth-input"
            type={mostrarSenha ? "text" : "password"}
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            aria-required="true"
            placeholder="Repita a senha"
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Cadastrando…" : "Cadastrar"}
        </button>
      </form>
    </div>
  );

  // Se estiver em rota própria, envolve com .auth-page para centralizar
  if (embedded) return Card;
  return <div className="auth-page">{Card}</div>;
}

export default CriarConta;
