import React from 'react';

function Mensagem({ userPhoto, userName, text }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            marginBottom: 14,
            background: '#f5f5f5',
            borderRadius: 12,
            padding: '10px 14px',
            maxWidth: 350,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
        }}>
            <img
                src={userPhoto}
                alt={userName}
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginTop: 2
                }}
            />
            <div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{userName}</div>
                <div style={{ fontSize: 15, color: '#222' }}>{text}</div>
            </div>
        </div>
    );
}

export default Mensagem;