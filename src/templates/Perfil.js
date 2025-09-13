import React from 'react'
import Model from '../Model';
import '../static/style.css';
import Header from '../components/Header';

function Perfil() {
    const [name, setName] = useState('Seu Nome');
    const [email] = useState('seuemail@exemplo.com');

    return(
        <Model>
            <div className="profile-container" style={{
            maxWidth: 400,
            margin: '0 auto',
            borderRadius: 20,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            background: '#fff',
            paddingBottom: 32,
            minHeight: '100vh'
        }}>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 32 }}>
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Profile"
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginBottom: 24,
                        border: '3px solid #f2f2f2'
                    }}
                />
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={{
                        fontSize: 22,
                        fontWeight: 600,
                        textAlign: 'center',
                        border: 'none',
                        borderBottom: '2px solid #eee',
                        marginBottom: 12,
                        outline: 'none',
                        background: 'transparent',
                        width: 200
                    }}
                />
                <div style={{
                    fontSize: 16,
                    color: '#888',
                    marginTop: 8
                }}>
                    {email}
                </div>
            </div>
        </div>
        </Model>
    )

}

export default Perfil;