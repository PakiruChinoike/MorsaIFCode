import React from 'react'
import Model from '../Model';
import { useQuery } from '@tanstack/react-query';

function ChatComunidade(comunidadeId) {
    const { data, error, isLoading } = useQuery([comunidade], async () => {
        const response = await axios.get('');
        return response.data
    })

    if (isLoading) return <div>Carregando conversa da comunidade...</div>

    return(
        <Model>
            <h1>{data.nome}</h1>
            <ul>
                {error ? 
                    <div>Erro ao carregar mensagens</div> : 
                    data.mensagens.map((mensagem) => (
                        <li key={mensagem.id}>{mensagem.texto}</li>
                    ))  
                }  
            </ul>
        </Model>
    )

}

export default ChatComunidade;