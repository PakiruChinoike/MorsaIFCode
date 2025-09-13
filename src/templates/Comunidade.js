import React from 'react';
import Model from '../Model';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Post from '../components/Post';
import axios from 'axios';

function Comunidade() {
  const { id } = useParams(); // ajuste sua rota para fornecer :id ou :slug

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['comunidade', id ?? 'default'],
    queryFn: async () => {
      // Ajuste a URL de acordo com sua API
      const url = id ? `/api/comunidades/${id}` : '/api/comunidades/default';
      const { data } = await axios.get(url);
      return data;
    },
    // transforma em formato seguro para renderização
    select: (d) => ({
      nome: d?.nome ?? 'Comunidade',
      posts: Array.isArray(d?.posts) ? d.posts : [],
    }),
    staleTime: 5 * 60 * 1000, // 5min
    retry: 1,
    enabled: true, // se quiser bloquear quando não houver id: enabled: !!id
  });

  if (isPending) return <div>Carregando comunidade…</div>;

  if (isError) {
    const msg =
      error && typeof error === 'object' && 'message' in error
        ? error.message
        : 'Erro ao carregar a comunidade, tente novamente mais tarde.';
    return <div>Erro: {String(msg)}</div>;
  }

  return (
    <Model>
      <h1>{data.nome}</h1>

      {!data.posts.length ? (
        <p>Nenhum post por aqui ainda.</p>
      ) : (
        <ul className="post-list">
          {data.posts.map((post, idx) => (
            <li key={post.id ?? post.slug ?? idx}>
              <Post postagem={post} />
            </li>
          ))}
        </ul>
      )}
    </Model>
  );
}

export default Comunidade;
