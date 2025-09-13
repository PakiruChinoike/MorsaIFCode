import React from 'react';
import Header from '../components/Header'
import Model from '../Model';

function Home() {
    const communities = [
        {
            name: 'Comunidade Natureza',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Comunidade Tecnologia',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80'
        },
        {
            name: 'Comunidade Esportes',
            image: 'https://images.unsplash.com/photo-1505843279827-4b522fae12b2?auto=format&fit=crop&w=400&q=80'
        }
    ];

    return (
        <Model>
            <Header />
            <div
                style={{
                    maxWidth: 400,
                    margin: '0 auto',
                    padding: '16px 0',
                    background: '#fff',
                    minHeight: '100vh',
                    borderRadius: 20,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    overflow: 'hidden'
                }}
            >
                <div
                    style={{
                        height: 520,
                        overflowY: 'scroll',
                        padding: '0 0 24px 0'
                    }}
                >
                    {communities.map((com, idx) => (
                        <div
                            key={com.name}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                background: '#f7f7f7',
                                borderRadius: 18,
                                margin: idx === 2 ? '-40px 0 24px 0' : '0 0 24px 0',
                                boxShadow: idx < 2 ? '0 2px 8px rgba(0,0,0,0.07)' : 'none',
                                height: idx < 2 ? 180 : 80,
                                overflow: 'hidden',
                                position: idx === 2 ? 'relative' : 'static',
                                zIndex: idx === 2 ? 1 : 2
                            }}
                        >
                            <img
                                src={com.image}
                                alt={com.name}
                                style={{
                                    width: idx < 2 ? 120 : 60,
                                    height: idx < 2 ? 120 : 60,
                                    objectFit: 'cover',
                                    borderRadius: 16,
                                    margin: idx < 2 ? '0 20px 0 16px' : '0 12px 0 8px'
                                }}
                            />
                            <span
                                style={{
                                    fontSize: idx < 2 ? 24 : 16,
                                    fontWeight: 600,
                                    color: '#333'
                                }}
                            >
                                {com.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Model>
    )
}

export default Home;