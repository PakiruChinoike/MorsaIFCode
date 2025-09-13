import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    function redirectHome() {
        navigate('/home')
    }

    function redirectPerfil() {
        navigate('/perfil')
    }

    return (
        <header>
            <button onClick={redirectHome}>Home</button>
            <button onClick={redirectPerfil}>Perfil</button>
        </header>
    )
}

export default Header;