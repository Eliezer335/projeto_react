import Curriculo from "./curiculo";
const listaDeCurriculos = [
    {
        nome: "Eliezer Martinhago da Silva",
        celular: "(11) 9 9999-9999",
        email: "eliezer@gmail.com",
        linksProficionais: {
            linkedin: "www.linkedin.com/in/mariana-castro-ti",
            instagram: "@marianacastro.dev"
        },
        FormacaoAcademica: {
            primeiraFormacao: "Análise e Desenvolvimento de Sistemas"
        },
        experienciaProficional: {
            resumo: "Apaixonada por tecnologia e soluções digitais. Procuro oportunidades para aplicar meus conhecimentos e crescer profissionalmente.",
            empresas: {
                primeiraEmpresa: {
                    nomeDaempresa: "TechUp",
                    cargo: "Estagiária de Desenvolvimento",
                    atribuicoes: "Apoio no desenvolvimento de sistemas web com HTML, CSS e JavaScript.",
                    periodoDeAtuacao: "Março 2023 - Dezembro 2023"
                }
            },
            habilidades: {
                softSkills: "Comunicação, Proatividade, Trabalho em equipe",
                hardSkills: "HTML, CSS, JavaScript, Git"
            },
            idioma: {
                primeiroIdioma: "Inglês - Intermediário"
            }
        }
    },
    {
        linksProficionais: {
            linkedin: "www.linkedin.com/in/jonathan-pereira-dev",
            instagram: "@jonathan_codes"
        },
        FormacaoAcademica: {
            primeiraFormacao: "Engenharia da Computação"
        },
        experienciaProficional: {
            resumo: "Estudante dedicado com interesse em desenvolvimento de software e análise de dados.",
            empresas: {
                primeiraEmpresa: {
                    nomeDaempresa: "Byte Systems",
                    cargo: "Suporte Técnico",
                    atribuicoes: "Atendimento ao cliente, manutenção de computadores, instalação de softwares.",
                    periodoDeAtuacao: "Janeiro 2022 - Outubro 2023"
                }
            },
            habilidades: {
                softSkills: "Foco, Adaptabilidade, Organização",
                hardSkills: "Python, SQL, Power BI, Linux"
            },
            idioma: {
                primeiroIdioma: "Inglês - Básico"
            }
        }
    },
    {
        linksProficionais: {
            linkedin: "www.linkedin.com/in/lais-monteiro-ti",
            instagram: "@lais.tech"
        },
        FormacaoAcademica: {
            primeiraFormacao: "Ciência da Computação"
        },
        experienciaProficional: {
            resumo: "Tenho paixão por inovação e busco aplicar minhas habilidades para resolver problemas reais com tecnologia.",
            empresas: {
                primeiraEmpresa: {
                    nomeDaempresa: "Start Tecnologia",
                    cargo: "Desenvolvedora Júnior",
                    atribuicoes: "Desenvolvimento de APIs com Node.js e manutenção de banco de dados PostgreSQL.",
                    periodoDeAtuacao: "Abril 2022 - Atualmente"
                }
            },
            habilidades: {
                softSkills: "Criatividade, Empatia, Resolução de problemas",
                hardSkills: "Node.js, PostgreSQL, React, REST APIs"
            },
            idioma: {
                primeiroIdioma: "Inglês - Intermediário"
            }
        }
    },
    {
        linksProficionais: {
            linkedin: "www.linkedin.com/in/felipe-gomes-ti",
            instagram: "@felipe.codes"
        },
        FormacaoAcademica: {
            primeiraFormacao: "Sistemas de Informação"
        },
        experienciaProficional: {
            resumo: "Busco novos desafios na área de desenvolvimento de sistemas. Tenho facilidade com lógica e trabalho em equipe.",
            empresas: {
                primeiraEmpresa: {
                    nomeDaempresa: "Inova TI",
                    cargo: "Assistente de Suporte",
                    atribuicoes: "Suporte remoto a clientes, documentação de processos e testes de sistemas.",
                    periodoDeAtuacao: "Fevereiro 2021 - Dezembro 2022"
                }
            },
            habilidades: {
                softSkills: "Colaboração, Responsabilidade, Pontualidade",
                hardSkills: "Java, MySQL, GitHub, HTML"
            },
            idioma: {
                primeiroIdioma: "Inglês - Básico"
            }
        }
    },
    {
        linksProficionais: {
            linkedin: "www.linkedin.com/in/ana-carolina-ti",
            instagram: "@ana.devfront"
        },
        FormacaoAcademica: {
            primeiraFormacao: "Engenharia de Software"
        },
        experienciaProficional: {
            resumo: "Desenvolvedora Front-End com foco em interfaces acessíveis e responsivas.",
            empresas: {
                primeiraEmpresa: {
                    nomeDaempresa: "DesignCode",
                    cargo: "Desenvolvedora Front-End",
                    atribuicoes: "Criação de interfaces com React, integração com APIs e design responsivo.",
                    periodoDeAtuacao: "Janeiro 2023 - Atualmente"
                }
            },
            habilidades: {
                softSkills: "Detalhista, Organização, Comunicação",
                hardSkills: "React, Tailwind CSS, Figma, JavaScript"
            },
            idioma: {
                primeiroIdioma: "Inglês - Avançado"
            }
        }
    },
    {
        linksProficionais: {
            linkedin: "www.linkedin.com/in/ricardo-alves-ti",
            instagram: "@ricardo.techlife"
        },
        FormacaoAcademica: {
            primeiraFormacao: "Tecnologia da Informação"
        },
        experienciaProficional: {
            resumo: "Tecnólogo com experiência em infraestrutura de redes e segurança da informação.",
            empresas: {
                primeiraEmpresa: {
                    nomeDaempresa: "NetSol",
                    cargo: "Analista de Redes",
                    atribuicoes: "Monitoramento de rede, configuração de switches e firewalls.",
                    periodoDeAtuacao: "Maio 2020 - Agosto 2023"
                }
            },
            habilidades: {
                softSkills: "Confiável, Analítico, Atento aos detalhes",
                hardSkills: "Cisco, Linux, Firewall, VLAN"
            },
            idioma: {
                primeiroIdioma: "Inglês - Intermediário"
            }
        }
    },
    {
        linksProficionais: {
            linkedin: "www.linkedin.com/in/juliana-souza-ti",
            instagram: "@juliana.devjr"
        },
        FormacaoAcademica: {
            primeiraFormacao: "Informática para Negócios"
        },
        experienciaProficional: {
            resumo: "Estagiária dedicada e comunicativa, com foco em desenvolvimento de sites e blogs empresariais.",
            empresas: {
                primeiraEmpresa: {
                    nomeDaempresa: "WebStart",
                    cargo: "Estagiária de Web Design",
                    atribuicoes: "Criação de layouts, ajustes em HTML/CSS, e suporte em WordPress.",
                    periodoDeAtuacao: "Agosto 2022 - Janeiro 2023"
                }
            },
            habilidades: {
                softSkills: "Criatividade, Flexibilidade, Organização",
                hardSkills: "HTML, CSS, WordPress, Photoshop"
            },
            idioma: {
                primeiroIdioma: "Inglês - Básico"
            }
        }
    },
    {
        linksProficionais: {
            linkedin: "www.linkedin.com/in/matheus-lima-ti",
            instagram: "@matheus.devfull"
        },
        FormacaoAcademica: {
            primeiraFormacao: "Ciência de Dados"
        },
        experienciaProficional: {
            resumo: "Entusiasta em ciência de dados e machine learning. Em busca de oportunidades para aplicar modelos preditivos em negócios reais.",
            empresas: {
                primeiraEmpresa: {
                    nomeDaempresa: "DataSmart",
                    cargo: "Estagiário de Ciência de Dados",
                    atribuicoes: "Análise de dados, criação de dashboards e suporte na criação de modelos preditivos.",
                    periodoDeAtuacao: "Março 2023 - Atualmente"
                }
            },
            habilidades: {
                softSkills: "Raciocínio lógico, Foco em resultados, Colaboração",
                hardSkills: "Python, Pandas, Scikit-learn, Power BI"
            },
            idioma: {
                primeiroIdioma: "Inglês - Intermediário"
            }
        }
    },
    {
        linksProficionais: {
            linkedin: "www.linkedin.com/in/beatriz-freitas-ti",
            instagram: "@bia.code"
        },
        FormacaoAcademica: {
            primeiraFormacao: "Tecnologia em Banco de Dados"
        },
        experienciaProficional: {
            resumo: "Profissional organizada e atenta aos detalhes, com experiência em gerenciamento de dados e consultas SQL.",
            empresas: {
                primeiraEmpresa: {
                    nomeDaempresa: "DataBank",
                    cargo: "Analista de Dados",
                    atribuicoes: "Criação de relatórios, otimização de queries e suporte ao time de BI.",
                    periodoDeAtuacao: "Julho 2021 - Janeiro 2024"
                }
            },
            habilidades: {
                softSkills: "Comprometimento, Análise crítica, Comunicação clara",
                hardSkills: "SQL, Oracle, PostgreSQL, Excel"
            },
            idioma: {
                primeiroIdioma: "Inglês - Avançado"
            }
        }
    },
    {
        linksProficionais: {
            linkedin: "www.linkedin.com/in/caio-martins-ti",
            instagram: "@caio.fullstack"
        },
        FormacaoAcademica: {
            primeiraFormacao: "Desenvolvimento Web"
        },
        experienciaProficional: {
            resumo: "Desenvolvedor Full Stack com foco em soluções escaláveis para web e mobile.",
            empresas: {
                primeiraEmpresa: {
                    nomeDaempresa: "CodeWave",
                    cargo: "Desenvolvedor Full Stack",
                    atribuicoes: "Criação de sistemas integrados usando React, Node.js e MongoDB.",
                    periodoDeAtuacao: "Setembro 2022 - Atualmente"
                }
            },
            habilidades: {
                softSkills: "Iniciativa, Pensamento sistêmico, Liderança",
                hardSkills: "React, Node.js, MongoDB, Docker"
            },
            idioma: {
                primeiroIdioma: "Inglês - Intermediário"
            }
        }
    }
];

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
                    />
                )
            })}

        </>
    )
};

export default Pagina;