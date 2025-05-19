
function Ternario() {
    const booleano = false;

    const ternario = (booleano === true) ? 'black' : 'white'
    // (condição) ? (se a condição for verdadeira) : (se a condição for falsa)

    return (
        <div style={{ width: "20px", height: "20px", backgroundColor: ternario }}>

        </div>
    )
}

export default Ternario;