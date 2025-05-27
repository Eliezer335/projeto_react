import Curriculo from "./curiculo";

const listaDeCurriculos = [
    {
        "nome": "Eliezer Martinhago da Silva",
        "celular": "(11) 9 9999-9999",
        "email": "eliezer@gmail.com",
        "linksProficionais": {
            "linkedin": "www.linkedin.com/in/mariana-castro-ti",
            "instagram": "@marianacastro.dev"
        },
        "FormacaoAcademica": {
            "primeiraFormacao": "Análise e Desenvolvimento de Sistemas"
        },
        "experienciaProficional": {
            "resumo": "Apaixonada por tecnologia e soluções digitais. Procuro oportunidades para aplicar meus conhecimentos e crescer profissionalmente.",
            "empresas": {
                "primeiraEmpresa": {
                    "nomeDaempresa": "TechUp",
                    "cargo": "Estagiária de Desenvolvimento",
                    "atribuicoes": "Apoio no desenvolvimento de sistemas web com HTML, CSS e JavaScript.",
                    "periodoDeAtuacao": "Março 2023 - Dezembro 2023"
                }
            },
            "habilidades": {
                "softSkills": "Comunicação, Proatividade, Trabalho em equipe",
                "hardSkills": "HTML, CSS, JavaScript, Git"
            },
            "idioma": {
                "primeiroIdioma": "Inglês - Intermediário"
            }
        }
    },
    {
        "nome": "Ana Beatriz Oliveira",
        "celular": "(21) 9 8888-1234",
        "email": "ana.oliveira@gmail.com",
        "linksProficionais": {
            "linkedin": "www.linkedin.com/in/anabeatrizdev",
            "instagram": "@ana.dev"
        },
        "FormacaoAcademica": {
            "primeiraFormacao": "Engenharia da Computação"
        },
        "experienciaProficional": {
            "resumo": "Entusiasta em desenvolvimento de software com foco em soluções escaláveis e eficientes.",
            "empresas": {
                "primeiraEmpresa": {
                    "nomeDaempresa": "CodeLab",
                    "cargo": "Desenvolvedora Júnior",
                    "atribuicoes": "Desenvolvimento de APIs REST usando Node.js.",
                    "periodoDeAtuacao": "Janeiro 2024 - Atual"
                }
            },
            "habilidades": {
                "softSkills": "Resolução de problemas, Colaboração, Organização",
                "hardSkills": "Node.js, JavaScript, MongoDB, Git"
            },
            "idioma": {
                "primeiroIdioma": "Inglês - Avançado"
            }
        }
    },
    {
        "nome": "Lucas Mendes Rocha",
        "celular": "(31) 9 7777-4567",
        "email": "lucas.rocha@outlook.com",
        "linksProficionais": {
            "linkedin": "www.linkedin.com/in/lucasmendesdev",
            "instagram": "@lucasmrocha.dev"
        },
        "FormacaoAcademica": {
            "primeiraFormacao": "Ciência da Computação"
        },
        "experienciaProficional": {
            "resumo": "Buscando aprimorar minhas habilidades como desenvolvedor full stack.",
            "empresas": {
                "primeiraEmpresa": {
                    "nomeDaempresa": "DevHouse",
                    "cargo": "Estagiário de Front-End",
                    "atribuicoes": "Criação de interfaces responsivas com React.",
                    "periodoDeAtuacao": "Agosto 2023 - Abril 2024"
                }
            },
            "habilidades": {
                "softSkills": "Adaptabilidade, Comunicação, Atenção aos detalhes",
                "hardSkills": "React, HTML, CSS, GitHub"
            },
            "idioma": {
                "primeiroIdioma": "Inglês - Intermediário"
            }
        }
    },
    {
        "nome": "Juliana Costa Ribeiro",
        "celular": "(51) 9 9999-9988",
        "email": "juliana.ribeiro@gmail.com",
        "linksProficionais": {
            "linkedin": "www.linkedin.com/in/julianacostadev",
            "instagram": "@julianacode"
        },
        "FormacaoAcademica": {
            "primeiraFormacao": "Sistemas de Informação"
        },
        "experienciaProficional": {
            "resumo": "Foco em desenvolvimento back-end e boas práticas de arquitetura de software.",
            "empresas": {
                "primeiraEmpresa": {
                    "nomeDaempresa": "BitTech",
                    "cargo": "Estagiária Back-End",
                    "atribuicoes": "Desenvolvimento de serviços com Python e Flask.",
                    "periodoDeAtuacao": "Fevereiro 2024 - Atual"
                }
            },
            "habilidades": {
                "softSkills": "Proatividade, Foco, Capacidade analítica",
                "hardSkills": "Python, Flask, PostgreSQL, Git"
            },
            "idioma": {
                "primeiroIdioma": "Inglês - Avançado"
            }
        }
    },
    {
        "nome": "Diego Fernandes Lima",
        "celular": "(61) 9 5555-7788",
        "email": "diego.lima@techmail.com",
        "linksProficionais": {
            "linkedin": "www.linkedin.com/in/diegofernandesdev",
            "instagram": "@diegofdev"
        },
        "FormacaoAcademica": {
            "primeiraFormacao": "Tecnologia da Informação"
        },
        "experienciaProficional": {
            "resumo": "Técnico em TI em transição para desenvolvimento de software, com foco em Python.",
            "empresas": {
                "primeiraEmpresa": {
                    "nomeDaempresa": "ITNow",
                    "cargo": "Assistente de Suporte Técnico",
                    "atribuicoes": "Atendimento a chamados, manutenção de sistemas e scripts em Python.",
                    "periodoDeAtuacao": "Janeiro 2022 - Dezembro 2023"
                }
            },
            "habilidades": {
                "softSkills": "Organização, Comunicação, Agilidade",
                "hardSkills": "Python, Bash, Git, SQL"
            },
            "idioma": {
                "primeiroIdioma": "Inglês - Básico"
            }
        }
    },
    {
        "nome": "Carla Menezes Silva",
        "celular": "(85) 9 4444-3322",
        "email": "carla.ms@devmail.com",
        "linksProficionais": {
            "linkedin": "www.linkedin.com/in/carlamsdev",
            "instagram": "@carla.codes"
        },
        "FormacaoAcademica": {
            "primeiraFormacao": "Engenharia de Software"
        },
        "experienciaProficional": {
            "resumo": "Desenvolvedora com experiência em projetos ágeis e interfaces modernas.",
            "empresas": {
                "primeiraEmpresa": {
                    "nomeDaempresa": "SoftPlus",
                    "cargo": "Estagiária Front-End",
                    "atribuicoes": "Criação de telas em Vue.js e manutenção de layout responsivo.",
                    "periodoDeAtuacao": "Julho 2023 - Atual"
                }
            },
            "habilidades": {
                "softSkills": "Trabalho em equipe, Comunicação, Organização",
                "hardSkills": "Vue.js, HTML, CSS, Git"
            },
            "idioma": {
                "primeiroIdioma": "Inglês - Intermediário"
            }
        }
    },
    {
        "nome": "Felipe Andrade Santos",
        "celular": "(41) 9 6666-1122",
        "email": "felipe.as@devmail.com",
        "linksProficionais": {
            "linkedin": "www.linkedin.com/in/felipeandradedev",
            "instagram": "@felipe.codes"
        },
        "FormacaoAcademica": {
            "primeiraFormacao": "Tecnologia em Banco de Dados"
        },
        "experienciaProficional": {
            "resumo": "Apaixonado por dados e automação. Atuo como analista em sistemas de informação.",
            "empresas": {
                "primeiraEmpresa": {
                    "nomeDaempresa": "DataSoft",
                    "cargo": "Estagiário em Análise de Dados",
                    "atribuicoes": "Coleta e análise de dados em SQL e Python.",
                    "periodoDeAtuacao": "Março 2023 - Dezembro 2023"
                }
            },
            "habilidades": {
                "softSkills": "Raciocínio lógico, Detalhismo, Proatividade",
                "hardSkills": "SQL, Python, Power BI, Excel Avançado"
            },
            "idioma": {
                "primeiroIdioma": "Inglês - Intermediário"
            }
        }
    },
    {
        "nome": "Renata Lopes Farias",
        "celular": "(71) 9 2222-9900",
        "email": "renatafarias@gmail.com",
        "linksProficionais": {
            "linkedin": "www.linkedin.com/in/renatalf",
            "instagram": "@renata.f.dev"
        },
        "FormacaoAcademica": {
            "primeiraFormacao": "Engenharia de Controle e Automação"
        },
        "experienciaProficional": {
            "resumo": "Experiência com sistemas embarcados e programação de microcontroladores.",
            "empresas": {
                "primeiraEmpresa": {
                    "nomeDaempresa": "InovaTech",
                    "cargo": "Estagiária de Automação",
                    "atribuicoes": "Programação de Arduinos e controle de sensores.",
                    "periodoDeAtuacao": "Janeiro 2023 - Outubro 2023"
                }
            },
            "habilidades": {
                "softSkills": "Criatividade, Persistência, Foco",
                "hardSkills": "C, C++, Arduino, MATLAB"
            },
            "idioma": {
                "primeiroIdioma": "Inglês - Intermediário"
            }
        }
    },
    {
        "nome": "André Souza Martins",
        "celular": "(62) 9 1010-2020",
        "email": "andremartins@dev.com",
        "linksProficionais": {
            "linkedin": "www.linkedin.com/in/andremartinsdev",
            "instagram": "@andrem.dev"
        },
        "FormacaoAcademica": {
            "primeiraFormacao": "Ciência de Dados"
        },
        "experienciaProficional": {
            "resumo": "Focado em análise e visualização de dados para tomada de decisões.",
            "empresas": {
                "primeiraEmpresa": {
                    "nomeDaempresa": "DataFlow",
                    "cargo": "Estagiário em Data Science",
                    "atribuicoes": "Modelagem de dados e construção de dashboards.",
                    "periodoDeAtuacao": "Setembro 2023 - Atual"
                }
            },
            "habilidades": {
                "softSkills": "Pensamento analítico, Comunicação clara, Curiosidade",
                "hardSkills": "Python, Pandas, Tableau, SQL"
            },
            "idioma": {
                "primeiroIdioma": "Inglês - Avançado"
            }
        }
    },
    {
        "nome": "Mariana Ribeiro Lopes",
        "celular": "(27) 9 2323-1414",
        "email": "mariana.ribeiro@outlook.com",
        "linksProficionais": {
            "linkedin": "www.linkedin.com/in/marianarlopes",
            "instagram": "@marianal.dev"
        },
        "FormacaoAcademica": {
            "primeiraFormacao": "Desenvolvimento Web"
        },
        "experienciaProficional": {
            "resumo": "Crio experiências digitais intuitivas e com foco no usuário.",
            "empresas": {
                "primeiraEmpresa": {
                    "nomeDaempresa": "UXCode",
                    "cargo": "Estagiária UX/UI",
                    "atribuicoes": "Protótipos, wireframes e testes de usabilidade.",
                    "periodoDeAtuacao": "Abril 2023 - Janeiro 2024"
                }
            },
            "habilidades": {
                "softSkills": "Empatia, Escuta ativa, Criatividade",
                "hardSkills": "Figma, Adobe XD, HTML, CSS"
            },
            "idioma": {
                "primeiroIdioma": "Inglês - Intermediário"
            }
        }
    }
]


function Pagina() {
    return (
        <>
            {listaDeCurriculos.map((item) => {
                return (
                    <Curriculo
                        nome={item.nome}
                        celular={item.celular}
                        email={item.email}
                        resumo={item.experienciaProficional.resumo}
                        cargo={item.experienciaProficional.empresas.primeiraEmpresa.cargo}
                        atribuicoes={item.experienciaProficional.empresas.primeiraEmpresa.atribuicoes}
                        nomeDaempresa={item.experienciaProficional.empresas.primeiraEmpresa.nomeDaempresa}
                        periodoDeAtuacao={item.experienciaProficional.empresas.primeiraEmpresa.periodoDeAtuacao}
                        softSkills={item.experienciaProficional.habilidades.softSkills}
                        hardSkills={item.experienciaProficional.habilidades.hardSkills}
                        idioma={item.experienciaProficional.idioma.primeiroIdioma}
                        linkedin={item.linksProficionais.linkedin}
                        instagram={item.linksProficionais.instagram}
                    />
                )
            })}

        </>
    )
};

export default Pagina;