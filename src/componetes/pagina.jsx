import { useState } from "react";

function Pagina() {
    const nome = "Gleison";

    const [contador, setContador] = useState(0);
    // const [estado, modificador do estado ] = useState(valor inicial do estado)

    //Hooks do React -> São funções que o próprio React disponibiliza para determinados objeitos
    //dentro da vida útil de um componente.


    //estado (state) é qualquer valor que você queira que varie ao longo do tempo


    function aumentaContador() {
        setContador(contador + 1)
    };

    return (
        <>
            <main>
                <h1>Essa é minha primeira página</h1>
                <p>foi o {nome} que criou esta página</p>
                <h2>O valor é: {contador}</h2>
                <button onClick={aumentaContador}>Aumente o valor</button>
                <img width={100} src="data:image/jpeg;base64,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" alt="" />
            </main>
        </>
    )
};

export default Pagina;