import React, { useState, useRef } from 'react';

function Comentario({ userPhoto, userName, onSend }) {
    const [comment, setComment] = useState('');
    const recognitionRef = useRef(null);

    // Simple speech-to-text using Web Speech API
    const handleAudio = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Seu navegador não suporta reconhecimento de voz.');
            return;
        }
        if (!recognitionRef.current) {
            const SpeechRecognition = window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.lang = 'pt-BR';
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setComment(prev => prev + (prev ? ' ' : '') + transcript);
            };
        }
        recognitionRef.current.start();
    };

    const handleSend = () => {
        if (comment.trim()) {
            if (onSend) onSend(comment);
            setComment('');
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 12,
            background: '#f7f7f7',
            borderRadius: 12,
            padding: 16,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            marginBottom: 12
        }}>
            <img
                src={userPhoto}
                alt={userName}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginTop: 2
                }}
            />
            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{userName}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                        type="text"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Escreva um comentário..."
                        style={{
                            flex: 1,
                            border: '1px solid #ddd',
                            borderRadius: 8,
                            padding: '8px 12px',
                            fontSize: 15,
                            outline: 'none'
                        }}
                        onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                    />
                    <button
                        onClick={handleAudio}
                        style={{
                            background: '#e3e3e3',
                            border: 'none',
                            borderRadius: '50%',
                            width: 32,
                            height: 32,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                        }}
                        title="Falar"
                    >
                        <span role="img" aria-label="audio">🎤</span>
                    </button>
                    <button
                        onClick={handleSend}
                        style={{
                            background: '#1976d2',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 8,
                            padding: '8px 16px',
                            fontWeight: 600,
                            fontSize: 15,
                            cursor: 'pointer'
                        }}
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Comentario;