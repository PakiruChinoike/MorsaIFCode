import React from 'react'
import Model from '../Model';
import { useQuery } from '@tanstack/react-query';
import Post from '../components/Post';

function Comunidade() {
    const { data, error, isLoading } = useQuery(['comunidade'], async () => {
        const response = await axios.get('')
        return response.data
    })

    if (isLoading) return <div>Carregando comunidade...</div>
    if (error) return <div>Erro ao carregar a comunidade, tente novamente mais tarde</div>

    return(
        <Model>
            <h1>{data.nome}</h1>
            <ul>
                {data.posts.map((post) => (
                    <Post postagem={post}/>
                ))}
            </ul>
        </Model>
    )

}

export default Comunidade;