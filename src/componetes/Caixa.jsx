const Caixa = ({ numero, nome }) => {
    return (
        <section
            style={{
                width: '300px',
                height: '150px',
                backgroundColor: 'white'
            }}>
            <p style={{ color: 'black' }}>Currículo número {numero}</p>
            <h2 style={{ color: 'black' }}>Currículo de {nome}</h2>
        </section>
    )
}

export default Caixa;