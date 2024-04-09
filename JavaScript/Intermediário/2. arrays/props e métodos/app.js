/*
    ARRAYS - PROPRIEDADES E MÉTODOS SIMPLES
*/ 

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

addAvalista("Andrew");
addAvalista("Clark");
addAvalista("Louis");
console.log(avalistas);

removeAvalistas();
console.log(avalistas);

editaAvalista("Luis",0);
console.log(avalistas);

console.log(ordenaAvalista());


// Adicionando Elementos

const frutas = [];
  
frutas[0] = "Kiwi";
frutas[1] = "Morango";
frutas[2] = "Uva";
frutas[3] = "Limão";

// console.log(frutas);

// Editar Elementos - declarar novamente

// PROPRIEDADE - Length - comprimento do array

frutas[1] = "Melancia";
console.log(frutas.length); // return 4 

// MÉTODOS: Funções aplicadas a Arrays

// sort() - ordena o array
frutas.sort(); // sorteamento do array em ordem crescente (alfabética com Letras e crescente com Números)

// reverse() - inverte a ordem do array

// push() - add um ou mais elementos ao final do Array

const frutas = ["Maça","Melancia"];
frutas.push("Banana","Limão");
console.log(fruta); //["Maça","Melancia","Banana","Limão"]

// unshift() - add um ou mais elementos no começo do Array

// pop() - remove o último elemento do do Array

// shift() - remove o primeiro elemento do Array

// splice() - remove um intervalo de elementos - 
frutas.splice(3,2);

// indexOf(); retorna o índice do elemento 
const frutas = ["Maça","Melancia"];
frutas.indexOf("Melancia"); // retorna 1

