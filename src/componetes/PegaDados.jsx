import axios from 'axios';
import { useEffect, useState } from 'react';

const PegaDados = () => {
    const [dados, setDados] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const buscarDados = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                console.log(response.data)
                setDados(response.data);
            } catch (err) {
                setError('Erro ao buscar dados: ' + err.message);
            } finally {
                setLoading(false)
            }
        };

        buscarDados()
    }, []);


    if (loading) {
        return <p>Carregando...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }
    if (!dados) {
        return <p>Nenhum dado encontrado.</p>;
    }

    return (
        <div>
            <h1>Dados</h1>
            <div>
                <p>Esses são os dados:</p>
                <div>

                </div>
            </div>
        </div>
    )
};

export default PegaDados;