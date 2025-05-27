const Caixa = ({numero, nome}) => {
    return(
        <section 
            onclink = {onclink}
            style={{
                width: '300px',
                height: '300px',
                backgroundColor:'black'
            }}>
            <p style={{color:"white"}}> Curriculo numero {numero}</p>
            <h2 style={{color:"white"}}> Curriculo de {nome}</h2>
        </section>
    )
}

export default Caixa;