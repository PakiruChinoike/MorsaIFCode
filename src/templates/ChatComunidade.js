import React from 'react';
import Model from '../Model';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'; // se preferir via rota
import axios from 'axios';

function ChatComunidade(props) {
  // Você pode optar por via props OU via rota:
  // 1) via props: const { comunidadeId } = props;
  // 2) via rota:
  const { comunidadeId: comunidadeIdFromParams } = useParams();
  const comunidadeId = props.comunidadeId ?? comunidadeIdFromParams ?? 'default';

  const {
    data,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['mensagens', comunidadeId],
    queryFn: async () => {
      // Ajuste a URL da sua API
      const url = `/api/comunidades/${comunidadeId}/chat`;
      const { data } = await axios.get(url);
      return data;
    },
    // Garante formato seguro p/ render
    select: (d) => ({
      nome: d?.nome ?? 'Chat da Comunidade',
      mensagens: Array.isArray(d?.mensagens) ? d.mensagens : [],
    }),
    // Atualiza periodicamente para simular “tempo real”
    refetchInterval: 5000,   // 5s (ajuste ou remova se usar websockets)
    refetchOnWindowFocus: true,
    staleTime: 10 * 1000,    // 10s
    retry: 1,
    enabled: !!comunidadeId, // só busca se houver ID
  });

  if (isPending) return <div>Carregando conversa da comunidade…</div>;

  if (isError) {
    const msg =
      error && typeof error === 'object' && 'message' in error
        ? error.message
        : 'Erro ao carregar mensagens. Tente novamente mais tarde.';
    return (
      <Model>
        <h1>Chat da Comunidade</h1>
        <div>Erro: {String(msg)}</div>
      </Model>
    );
  }

  return (
    <Model>
      <h1>{data.nome}</h1>
      {!data.mensagens.length ? (
        <p>Nenhuma mensagem por aqui ainda.</p>
      ) : (
        <ul>
          {data.mensagens.map((mensagem) => (
            <li key={mensagem.id ?? `${mensagem.autor}-${mensagem.data}-${mensagem.texto?.slice(0,10)}`}>
              {mensagem.texto}
            </li>
          ))}
        </ul>
      )}
    </Model>
  );
}

export default ChatComunidade;
