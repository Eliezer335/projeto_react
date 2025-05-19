import './Curriculo.css'

const dadosDoCurriculo = {
    
    linksProficionais: {
        linkedin: "www.linkedin.com/in/eliezer-martinhago-da-silva-9708451a7",
        instagram: "@elizermartinhago"
    },
    FormacaoAcademica: {
        primeiraFormacao: "Gestao de Tecnologia da Informação",
    },
    experienciaProficional: {
        resumo: " Jovem dedicado em busca de oportunidades na área de TI. Possuo sólida formação teórica, habilidades em programação, resolução deproblemas e atendimento ao cliente, além do desejo de crescer profissionalmente. ",
        empresas: {
            primeiraEmpresa: {
                nomeDaempresa: "Capital",
                cargo: " Auxiliar ADM/ Vendedor",
                atribuicoes: "Atendimento ao cliente, organização de documentaçoes dos clientes, organição do financeiro da loja.",
                periodoDeAtuacao: "Junho 2021 - Atualmente"
            }
        },

        habilidades: {
            softSkills: "Atendimentos ao Cliente, Vendas, Organização, Proativo",
            hardSkills: "HTML, Css, JavaScript, React"
        },
        idioma: {
            primeiroIdioma: "Ingles - Iniciante"
        }
    }
};


const Curriculo = ({
    nome,
    celular,
    email
}) => {
    return (
        <>
            <div className='container_curriculo' >

                <div className='curriculo'>
                    <header className='header'>
                        <h2 className='headerTxt1'>{nome}</h2>
                        <h3 className='headerTxt2'>{celular}</h3>
                        <h3 className='headerTxt3'>{email}</h3>
                    </header>
                    <main>
                        <h3>RESUMO</h3>
                        <h3 className='resumoTxt'>{dadosDoCurriculo.experienciaProficional.resumo}</h3>
                        <h3>EXPERIÊNCIA</h3>
                        <h3 className='experieciaTxt'>Cargo na Empresa: {dadosDoCurriculo.experienciaProficional.empresas.primeiraEmpresa.cargo}</h3>
                        <h3 className='experieciaTxt'>{dadosDoCurriculo.experienciaProficional.empresas.primeiraEmpresa.atribuicoes}</h3>
                        <h3 className='experieciaTxt'>Empresa {dadosDoCurriculo.experienciaProficional.empresas.primeiraEmpresa.nomeDaempresa}, {dadosDoCurriculo.experienciaProficional.empresas.primeiraEmpresa.periodoDeAtuacao}</h3>
                        <h3>HABILIDADES</h3>
                        <h3 className='habilidadesTxt'>{dadosDoCurriculo.experienciaProficional.habilidades.softSkills}</h3>
                        <h3 className='habilidadesTxt'>{dadosDoCurriculo.experienciaProficional.habilidades.hardSkills}</h3>
                        <h3>IDIOMAS</h3>
                        <h3 className='idiomaTxt'>{dadosDoCurriculo.experienciaProficional.idioma.primeiroIdioma}</h3>
                    </main>
                    <footer>
                        <h3>links para contato</h3>
                        <h3 className='linksTxt'>{dadosDoCurriculo.linksProficionais.linkedin}</h3>
                        <h3 className='linksTxt'>{dadosDoCurriculo.linksProficionais.instagram}</h3>
                    </footer>
                </div>

            </div>
        </>
    )
}

export default Curriculo;