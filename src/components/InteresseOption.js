import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InteresseOption({ userId, onSuccess }) {
    const [communities, setCommunities] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/communities')
            .then(res => setCommunities(res.data))
            .catch(() => setCommunities([]));
    }, []);

    const handleToggle = (idx) => {
        setSelected(prev =>
            prev.includes(idx)
                ? prev.filter(i => i !== idx)
                : [...prev, idx]
        );
    };

    const handleSubmit = async () => {
        const selectedCommunities = selected.map(idx => communities[idx]);
        try {
            await axios.post('http://localhost:8080/api/interesses', {
                userId,
                communities: selectedCommunities
            });
            if (onSuccess) onSuccess(selectedCommunities);
            alert('Interesses salvos com sucesso!');
        } catch (err) {
            alert('Erro ao salvar interesses.');
        }
    };

    return (
        <div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 16,
                justifyContent: 'center',
                marginBottom: 24
            }}>
                {communities.map((com, idx) => (
                    <div
                        key={com.id || com.name + idx}
                        onClick={() => handleToggle(idx)}
                        style={{
                            width: 100,
                            height: 100,
                            background: selected.includes(idx) ? '#1976d2' : '#f7f7f7',
                            borderRadius: 16,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'box-shadow 0.2s, background 0.2s',
                        }}
                    >
                        <img
                            src={com.photo}
                            alt={com.name}
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: 12,
                                objectFit: 'cover',
                                marginBottom: 8,
                                border: selected.includes(idx) ? '2px solid #fff' : 'none'
                            }}
                        />
                        <span style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: selected.includes(idx) ? '#fff' : '#333',
                            textAlign: 'center'
                        }}>
                            {com.name}
                        </span>
                    </div>
                ))}
            </div>
            <button
                onClick={handleSubmit}
                style={{
                    background: '#1976d2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '10px 24px',
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: 'pointer',
                    width: 200,
                    display: 'block',
                    margin: '0 auto'
                }}
            >
                Salvar Interesses
            </button>
        </div>
    );
}

export default InteresseOption;