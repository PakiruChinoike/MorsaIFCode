import React from 'react';
import Model from '../Model';
import InteresseOption from '../components/InteresseOption';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Interesses() {
  // Ajuste a URL para sua API real:
  const { data = [], isPending, isError, error } = useQuery({
    queryKey: ['interesses'],
    // queryFn no novo formato
    queryFn: async () => {
      const { data } = await axios.get('/api/interesses');
      return data;
    },
    // garante array mesmo que a API retorne um objeto
    select: (d) => (Array.isArray(d) ? d : []),
    // qualidade de vida
    staleTime: 5 * 60 * 1000, // 5 min
    retry: 1,                 // tenta 1x em caso de falha
  });

  const handleProsseguir = () => {
    // TODO: implemente a navegação/salvamento
    // ex.: navigate('/home') ou enviar interesses selecionados
    console.log('Prosseguir clicado');
  };

  if (isPending) return <div>Carregando interesses…</div>;
  if (isError) {
    const msg =
      error && typeof error === 'object' && 'message' in error
        ? error.message
        : 'Algo deu errado…';
    return <div>Erro ao carregar: {String(msg)}</div>;
  }

  if (!data.length) {
    return (
      <Model>
        <h1>Escolha seus interesses</h1>
        <p>Nenhum interesse disponível no momento.</p>
      </Model>
    );
  }

  return (
    <Model>
      <h1>Escolha seus interesses:</h1>

      {data.map((interesse, idx) => (
        <InteresseOption
          key={interesse.id ?? interesse.slug ?? interesse.name ?? idx}
          interesse={interesse}
        />
      ))}

      <button onClick={handleProsseguir}>Prosseguir</button>
    </Model>
  );
}

export default Interesses;
