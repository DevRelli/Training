/*
    + MÉTODOS ARRAYS
*/

const numeros = [10,20,30,40,50];

//  MAP -  mapeia array de origem e gera um novo array

const novosNumeros = numeros.map((numero) => numero + 5); // retorna o array somado em 5 [15,25,5,45,55]

const carros = [
    {nome: "Fiesta", marca: "Ford", cor: "Azul"},
    {nome: "Mustang", marca: "Ford", cor: "Preto"}
]

const cores = carros.map(({cor}) => cor);
console.log(cores)

// FILTER - filtra os valores e gera um novo array

// const novosNumeros = numeros.filter((numero) => numero > 25);

// FIND x FIND INDEX- valor do primeiro elemento que satisfaz a condição

const NumReturn = numeros.find((numero) => numero > 40);
const IndiceReturn = numeros.findIndex((numero) => numero > 40);
console.log(IndiceReturn); // retorna 4
console.log(NumReturn); // retorna 50

// ACESSO ALEATÓRIO DE ARRAYS
// Math.random() valores aleatórios de pontos flutuantes (float) ex: 1.545
// Math.floor() arredonda para baixo os valores

const valores = [2,4,5,6,8,6,3];    

let IndiceAleatorio = Math.floor(Math.random() * 7);

console.log(valores[IndiceAleatorio])

// PERCORRENDO ARRAYS - FOR IN, FOR OF, FOR EACH

// FOR IN - bom para acessar o indice
for(let indice in frutas){
    console.log(frutas[indice])
}
// FOR OF - bom para acessa o valor
for(let fruta of fruta){
    console.log(fruta);
}

// FOR EACH - acessa o valor e o índice

// frutas.forEach((fruta,indice) => {
//     console.log(fruta);
//     console.log("Fruta " + indice + ": " + fruta);
// });

// EXEMPLOS: SISTEMA DO BANCO

let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
let avalistas;

function CadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente,
    valorEmprestimoCliente, numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliente){
        nome = nomeCliente;
        sobrenome = sobrenomeCliente;
        idade = idadeCliente;
        valorEmprestimo = valorEmprestimoCliente;
        numAnos = numAnosCliente;
        ehBomPagador = ehBomPagadorCliente;
        taxaDeJuros = defineTaxa(idadeCliente);
        avalistas = avalistasCliente;
}

function defineTaxa(idade){
    if(idade >= 18 && idade <= 25){
        return 0.09;
    }else if(idade >= 26 && idade <= 35){
        return 0.08;
    }else if(idade >= 36 && idade <= 50){
        return 0.07;
    }else{
        return 0.06;
    }
}

CadastraCliente("Enzo", "Fiorelli", 24, 150000, 9, true,["Isabella", "Ongari", "Luiza"]) //length: 3
console.log(nome);
console.log(avalistas);
// console.log(avalistas[0]);
// console.log(avalistas[2]);

function addAvalista(avalista){
    avalistas.push(avalista);
}
function removeAvalistas(){
    avalistas.pop();
}
function editaAvalista(NomeAvalista, indice){
    avalistas[indice] = NomeAvalista 
}
function ordenaAvalista(){
    return avalistas.sort();
    
}

function exibeAvalista(){
    avalistas.forEach(avalista,indice => {
        console.log(`O ${indice + 1} avalista é ${avalista}`);
    });
}

addAvalista("Andrew");
addAvalista("Clark");
addAvalista("Louis");
// console.log(avalistas);

removeAvalistas();
// console.log(avalistas);

editaAvalista("Luis",0);
// console.log(avalistas);

// console.log(ordenaAvalista());
exibeAvalista(); 

// ARRAY BIDIMENSIONAL - Percorrendo Matrizes(Arrays) Bidimensionais - revisar os 2 cods abaixo

const clientes = [["Ongari", 24, true], ["Enzo", 21, false]];
console.table(clientes);

console.log(clientes[1][0]);

clientes.push(["Isabella",19,true]);
console.table(clientes);

const quadroFunc = [["Financeiro","Luccas"],["Contábil","Nathaly"],["Dados","Enzo"]];

quadroFunc.forEach(departamento, indiceDep => {
    departamento.forEach(funcionario, indiceDep => {
        console.log(`${indiceDep + 1} - ${funcionario}`);
    });
});