import Curriculo from "./curiculo";
import Caixa from "./Caixa";
import { useState } from "react";

function Pagina() {
    const header = {
        nome: "Eliezer Martinhago da Silva",
        celular: "(49) 99110-5517",
        email: "eliezerdasilva503@gmail.com",
    }
    const [click, setClick] = useState(false)
    const ternario = click ? "block" : "none"
    return (
        <>
            <Curriculo nome={nome} celular={celular} email={email} />
        </>
    )
};

export default Pagina;