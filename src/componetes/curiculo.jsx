import './Curriculo.css'

const dadosDoCurriculo = {
    nome: "Eliezer Martinhago da Silva",
    celular : "(49) 99110-5517",
    email: "eliezerdasilva503@gmail.com",
    linksProficionais: {
        linkedin:"www.linkedin.com/in/eliezer-martinhago-da-silva-9708451a7",
        instagram: "@elizermartinhago"
    },
    FormacaoAcademica: {
        primeiraFormacao: "Gestao de Tecnologia da Informação",
    },
    experienciaProficional:{
        resumo: " Jovem dedicado em busca de oportunidades na área de TI. Possuo sólida formação teórica, habilidades em programação, resolução deproblemas e atendimento ao cliente, além do desejo de crescer profissionalmente ",
        empresas: {
            primeiraEmpresa:{
                nomeDaempresa:"Capital",
                cargo:" Auxiliar ADM/ Vendedor",
                atribuicoes: "Atendimento ao cliente, organização de documentaçoes dos clientes, organição do financeiro da loja.",
                periodoDeAtuacao:"Junho 2021 - Atualmente"
            }
        },
        
        habilidades:{
            softSkills: "Atendimentos ao Cliente, Vendas, Organização, Proativo",
            hardSkills: "HTML, Css, JavaScript, React"
        },
        idioma: {
            primeiroIdioma: "Ingles - Iniciante"
        }
    }
};


const Curriculo = () => {
    return(
        <>
        <div className='curriculo'>
            <header>
                <h2>{dadosDoCurriculo.nome}</h2>
                <h3>{dadosDoCurriculo.email}</h3>
                <h3>{dadosDoCurriculo.celular}</h3>
            </header>
            <main>
                <h3>Resumo:{dadosDoCurriculo.experienciaProficional.resumo}</h3>
                <h3>EXPERIÊNCIA</h3>
                <h3>{dadosDoCurriculo.experienciaProficional.empresas.primeiraEmpresa.cargo}</h3>
                <h3>{dadosDoCurriculo.experienciaProficional.empresas.primeiraEmpresa.atribuicoes}</h3>
                <h3>Empresa {dadosDoCurriculo.experienciaProficional.empresas.primeiraEmpresa.nomeDaempresa}</h3>
                <h3>{dadosDoCurriculo.experienciaProficional.empresas.primeiraEmpresa.periodoDeAtuacao}</h3>
                <h3>Habilidades</h3>
                <h3>{dadosDoCurriculo.experienciaProficional.habilidades.softSkills}</h3>
                <h3>{dadosDoCurriculo.experienciaProficional.habilidades.hardSkills}</h3>
                <h3>{dadosDoCurriculo.experienciaProficional.idioma.primeiroIdioma}</h3>
            </main>
            <footer>
                <h3>links para contato</h3>
                <h3>{dadosDoCurriculo.linksProficionais.linkedin}</h3>
                <h3>{dadosDoCurriculo.linksProficionais.instagram}</h3>
            </footer>
        </div>
            
        </>
    )
} 

export default Curriculo;