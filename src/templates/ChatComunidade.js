import React from 'react'
import Model from '../Model';
import { useQuery } from '@tanstack/react-query';

function ChatComunidade(comunidadeId) {
    const { data, error, isLoading } = useQuery([comunidade], async () => {
        const response = await axios.get('');
        return response.data
    })

    if (isLoading) return <div>Carregando mensagens...</div>
    if (error) return <div>Erro carregando mensagens</div>

    return(
        <Model>
            <h1>{data.nome}</h1>
                       
        </Model>
    )

}

export default ChatComunidade;