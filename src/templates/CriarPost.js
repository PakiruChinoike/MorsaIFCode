import React, { useEffect, useRef, useState } from "react";
import Model from "../Model";
import "../static/style.css";

function CriarPost() {
  const [postText, setPostText] = useState("");
  const [okMsg, setOkMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const areaRef = useRef(null);
  const okRef = useRef(null);
  const errRef = useRef(null);

  const MAX = 500;

  useEffect(() => {
    areaRef.current?.focus();
  }, []);

  const handlePost = () => {
    setOkMsg("");
    setErrMsg("");

    const value = postText.trim();
    if (!value) {
      setErrMsg("Escreva algo antes de publicar.");
      errRef.current?.focus();
      return;
    }
    // Aqui você chamaria sua API de criação de post
    // ex.: await axios.post('/posts', { texto: value })
    setOkMsg("Post publicado com sucesso!");
    setPostText("");
    okRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handlePost();
    }
  };

  return (
    <Model>
      <div className="post-page">
        <div className="post-card" role="form" aria-labelledby="criarpost-title">
          <h1 id="criarpost-title" className="post-title">Criar Post</h1>

          {errMsg && (
            <div
              ref={errRef}
              className="auth-error"
              role="alert"
              aria-live="assertive"
              tabIndex={-1}
            >
              {errMsg}
            </div>
          )}
          {okMsg && (
            <div
              ref={okRef}
              className="auth-success"
              role="status"
              aria-live="polite"
              tabIndex={-1}
            >
              {okMsg}
            </div>
          )}

          <label htmlFor="postArea" className="auth-label">Mensagem</label>
          <div className="post-editor">
            <textarea
              id="postArea"
              ref={areaRef}
              className="post-textarea"
              value={postText}
              onChange={(e) => setPostText(e.target.value.slice(0, MAX))}
              onKeyDown={handleKeyDown}
              placeholder="O que você está pensando?"
              rows={6}
              aria-describedby="post-help post-count"
            />
            <div className="post-toolbar">
              <span id="post-help" className="help-text">
                Dica: use <kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>Enter</kbd> para publicar
              </span>
              <span id="post-count" className="post-count">
                {postText.length}/{MAX}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handlePost}
            disabled={!postText.trim()}
          >
            Publicar
          </button>
        </div>
      </div>
    </Model>
  );
}

export default CriarPost;
