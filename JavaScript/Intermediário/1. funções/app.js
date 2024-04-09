/*
    FUNÇÕES - DECLARAÇÃO, EXPRESSÃO, FLECHA
*/ 

let nome;
let sobrenome;
let idade;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;

// DECLARAÇÃO DE FUNÇÃO - sofre hosting - não são anônimas - disponível em todo código

function CadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente,
    valorEmprestimoCliente, numAnosCliente, ehBomPagadorCliente){
        nome = nomeCliente;
        sobrenome = sobrenomeCliente;
        idade = idadeCliente;
        valorEmprestimo = valorEmprestimoCliente;
        numAnos = numAnosCliente;
        ehBomPagador = ehBomPagadorCliente;
        taxaDeJuros = defineTaxa(idadeCliente)
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

CadastraCliente("Manuel", "Silva", 24, 150000, 8, true)
console.log(nome)
console.log(sobrenome)
console.log(taxaDeJuros)

// EXPRESSÃO DE FUNÇÃO - não sofre hosting - pode ser anônima -parte específica do código

// função anônima
// const media = function (num1, num2, num3)

const media = function CalculaMedia(num1, num2, num3){
    let mediaNum = (num1 + num2 + num3) / 3
    return mediaNum;
}

console.log(media(3,5,6));

// FUNÇÃO SETA

// const media = (num1, num2, num3) =>{
//     let mediaNum = (num1 + num2 + num3)/ 3
//     return mediaNum;
// }

console.log(media(3,5,6))

// ESCOPO GLOBAL - fora da função 
// ESCOPO LOCAL - dentro da função

function sauda(){
    let saudacao = "Ola " + nome;
    return saudacao;
}

console.log(sauda())

// DIFERENTES FORMAS DE ATRIBUIR PARAMETROS

// DEFAULT - parâmetros default, caso não seja atribuído nenhum valor no parâmetro

// function CalculaMedia(num1 = 2, num2 = 3, num3 = 5) =>{
//     let mediaNum = (num1 + num2 + num3)/ 3
//     return mediaNum;
// }

console.log(media()); // 2,3,5
console.log(media(1,6)); // 1,6,5

// REST - vai exibir os parâmetros em array

function exibeNumeros(...numeros){
    console.log(numeros);
}

exibeNumeros(1); // [1]
exibeNumeros(1,2,3); // [1,2,3]