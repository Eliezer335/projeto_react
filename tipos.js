const tipos = (valor) => {
    valor = 42
    console.log(valor)
}

let abacaxi = "abacaxi";
console.log(abacaxi)
tipos(abacaxi);
console.log(abacaxi)

// strings, numbers e booleanos chamamos de tipos primitivos

//____________________________________________________________________________________

const pessoa = {
    nome: "josé",
    idade: "10"
};

function novaFuncao(objeto) {
    objeto.nome = "Caio"
    console.log(objeto)
}

console.log(pessoa.nome); //deve aparecer José
novaFuncao(pessoa) //tentativa de mudança
console.log(pessoa.nome); //Deveria mudar para Caio

//objetos e arrays nós chamamos de tipos não-primitivos 

//____________________________________________________________________________________