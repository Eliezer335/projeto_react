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

//exemplo... Quero criar uma cópia de um array ->

const array = [1, 2, 3];
const novoArray = [];

for (let i = 0; i < array.length; i++) {
	novoArray.push(array[i]);
}

novoArray.push(4);

//Podemos usar o SPREAD OPERATOR para criar uma cópia de um array de maneira mais 
//eficiente

const nArray = [1, 2, 3];
const novonArray = [...array, 4]; //O operador SPREAD OPERATOR(...) te ajuda a colocar os elementos do array dentro de um novo array
const outroArray = [0, ...array];

//Também é possível usar o SPREAD OPERATOR em objetos:

const nPessoa = { nome: "João", idade: 20 };
const novaPessoa = { ...pessoa, idade: 21, email: "joao@email.com" };
