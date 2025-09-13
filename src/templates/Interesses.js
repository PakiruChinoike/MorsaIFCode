import React from 'react'
import Model from '../Model';
import InteresseOption from '../components/InteresseOption';

function Interesses() {
    const { data, error, isLoading } = useQuery(['interesses'], async () => {
        const response = await axios.get('')
        return response.data
    })

    const handleProsseguir = () => {
        
    }

    if (isLoading) return <div>Carregando interesses...</div>
    if (error) return <div>Algo deu errado...</div>

    return(

        <Model>
            <h1>Escolha seus interesses:</h1>
            {data.map((interesse) =>
                <InteresseOption interesse={interesse} />
            )}
            <button onClick={handleProsseguir}>Prosseguir</button>
        </Model>
    )

}

export default Interesses;