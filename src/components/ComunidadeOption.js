import React, { useState } from 'react';

function ComunidadeOption({ communities = [], onSelect }) {
    const [selected, setSelected] = useState(null);

    const handleSelect = (com, idx) => {
        setSelected(idx);
        if (onSelect) onSelect(com);
    };

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'center'
        }}>
            {communities.map((com, idx) => (
                <div
                    key={com.name + idx}
                    onClick={() => handleSelect(com, idx)}
                    style={{
                        width: 100,
                        height: 100,
                        background: selected === idx ? '#1976d2' : '#f7f7f7',
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
                            border: selected === idx ? '2px solid #fff' : 'none'
                        }}
                    />
                    <span style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: selected === idx ? '#fff' : '#333',
                        textAlign: 'center'
                    }}>
                        {com.name}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default ComunidadeOption;