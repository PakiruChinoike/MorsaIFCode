import React, { useState } from "react";
import Model from "../Model";
import "../static/style.css";
import Header from "../components/Header";

function Perfil() {
  const [name, setName] = useState("Seu Nome");
  const [email] = useState("seuemail@exemplo.com");

  return (
    <Model>
      <div className="profile-page">
        <div className="profile-card" role="form" aria-labelledby="perfil-title">
          <Header />

          <h1 id="perfil-title" className="profile-title">Meu Perfil</h1>

          <section className="profile-grid">
            {/* Avatar */}
            <div className="profile-avatar-wrap">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Foto do perfil"
                className="profile-avatar"
              />
              <button type="button" className="btn btn-outline profile-avatar-btn">
                Trocar foto
              </button>
            </div>

            {/* Dados */}
            <div className="profile-fields">
              <div className="field">
                <label htmlFor="nome" className="auth-label">Nome</label>
                <input
                  id="nome"
                  type="text"
                  className="auth-input profile-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-required="true"
                />
              </div>

              <div className="field">
                <label htmlFor="email" className="auth-label">E-mail</label>
                <input
                  id="email"
                  type="email"
                  className="auth-input profile-input"
                  value={email}
                  readOnly
                  aria-readonly="true"
                />
                <small className="help-text">E-mail não editável</small>
              </div>

              <div className="profile-actions">
                <button type="button" className="btn btn-primary">Salvar alterações</button>
                <button type="button" className="btn btn-dark">Sair da conta</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Model>
  );
}

export default Perfil;
