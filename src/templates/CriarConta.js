import React, { useState } from "react";
import Model from '../Model';

function CriarConta() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("");

    if (!form.nome || !form.email || !form.senha) {
      setMsg("Preencha todos os campos.");
      return;
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) {
      setMsg("E-mail inválido.");
      return;
    }
    if (form.senha.length < 6) {
      setMsg("A senha deve ter no mínimo 6 caracteres.");
      return;
    }
    if (form.senha !== form.confirmar) {
      setMsg("As senhas não coincidem.");
      return;
    }

    // Simula criação de conta
    setMsg("Conta criada com sucesso! 🎉");
    console.log("Dados enviados:", form);
  };

  return (
    <Model>
      <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Criar Conta
      </h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
        <label>
          Nome
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            required
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
        </label>

        <label>
          Senha
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
            placeholder="Mínimo 6 caracteres"
            required
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
        </label>

        <label>
          Confirmar Senha
          <input
            type="password"
            name="confirmar"
            value={form.confirmar}
            onChange={handleChange}
            placeholder="Repita sua senha"
            required
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#0b63d3",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Criar Conta
        </button>
      </form>
      {msg && (
        <p style={{ marginTop: "1rem", textAlign: "center", color: msg.includes("sucesso") ? "green" : "red" }}>
          {msg}
        </p>
      )}
    </Model>
  );
}

export default CriarConta;