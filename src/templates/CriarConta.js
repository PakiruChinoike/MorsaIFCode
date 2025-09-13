import React, { useState } from "react";
import Model from '../Model';

function Model({ children }) {
  return (
    <div style={{
      maxWidth: "420px",
      margin: "2rem auto",
      padding: "1.5rem",
      borderRadius: "12px",
      background: "#D9E4FF",
      boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
      fontFamily: "Arial, sans-serif"
    }}>
      {children}
    </div>
  );
}

function CriarConta() {
  return (
    <Model>
        <h1 textalign="center" textcolor="white">  </h1>
    </Model>
  );
}

export default CriarConta;