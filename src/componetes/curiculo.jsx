import './Curriculo.css'

const dadosDoCurriculo = {
    nome: "Eliezer Martinhago da Silva",
    celular: "(11) 9 9999-9999",
    email: "eliezer@gmail.com",
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
    email,
    resumo,
    cargo,
    atribuicoes,
    nomeDaempresa,
    periodoDeAtuacao,
    softSkills,
    hardSkills,
    idioma,
    linkedin,
    instagram
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
                        <h3 className='resumoTxt'>{resumo}</h3>
                        <h3>EXPERIÊNCIA</h3>
                        <h3 className='experieciaTxt'>Cargo na Empresa: {cargo}</h3>
                        <h3 className='experieciaTxt'>{atribuicoes}</h3>
                        <h3 className='experieciaTxt'>Empresa {nomeDaempresa}, {periodoDeAtuacao}</h3>
                        <h3>HABILIDADES</h3>
                        <h3 className='habilidadesTxt'>{softSkills}</h3>
                        <h3 className='habilidadesTxt'>{hardSkills}</h3>
                        <h3>IDIOMAS</h3>
                        <h3 className='idiomaTxt'>{idioma}</h3>
                    </main>
                    <footer>
                        <h3>links para contato</h3>
                        <h3 className='linksTxt'>{linkedin}</h3>
                        <h3 className='linksTxt'>{instagram}</h3>
                    </footer>
                </div>

            </div>
        </>
    )
}

export default Curriculo;