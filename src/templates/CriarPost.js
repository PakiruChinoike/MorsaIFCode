import React from 'react'
import Model from '../Model';

function CriarPost() {
    const [postText, setPostText] = useState('');

    const handlePost = () => {
        if (postText.trim()) {
            alert('Post enviado:\n' + postText);
            setPostText('');
        }
    };

    return (
        <Model>
            <div style={{
                maxWidth: 400,
                margin: '40px auto',
                borderRadius: 20,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                background: '#fff',
                padding: 24,
                minHeight: 300,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h2 style={{ marginBottom: 24 }}>Criar Post</h2>
                <textarea
                    value={postText}
                    onChange={e => setPostText(e.target.value)}
                    placeholder="O que você está pensando?"
                    rows={5}
                    style={{
                        width: '100%',
                        borderRadius: 10,
                        border: '1px solid #ddd',
                        padding: 12,
                        fontSize: 16,
                        marginBottom: 20,
                        resize: 'none'
                    }}
                />
                <button
                    onClick={handlePost}
                    style={{
                        background: '#1976d2',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '10px 24px',
                        fontSize: 16,
                        fontWeight: 600,
                        cursor: 'pointer',
                        width: '100%'
                    }}
                >
                    Publicar
                </button>
            </div>
        </Model>
    )

}

export default CriarPost;