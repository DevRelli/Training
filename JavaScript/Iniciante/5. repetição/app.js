/*
    ESTRUTURAS DE REPETIÇÃO - FOR, WHILE, DO WHILE, BREAK, CONTINUE
*/ 

let nome = "Manuel";
let sobrenome = "Silva";
let idade = 24;
const numCliente = 4326;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let juros;
let montante;10000

if(idade >= 18 && idade <= 25){
    taxaDeJuros = 0.09;
}else if(idade >= 26 && idade <= 35){
    taxaDeJuros = 0.08;
}else if(idade >= 36 && idade <= 50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}

// LAÇO FOR(contador = 0; condição de parada; rodar laço novamente até a parada)

// Quando temos uma parada definida pelo contador, quando sabemos o número exato de repetições a serem feitas

for(let cont = 0; cont < 3;  cont++){
    valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo: "));
    numAnos = parseInt(prompt("Digite o número de anos"))
    juros = valorEmprestimo * numAnos * taxaDeJuros
    montante = valorEmprestimo + juros
    console.log("Montante: ", montante)
}

// LAÇO WHILE(condição de parada)

// Quando temos uma parada definida pelo prompt

valorEmprestimo = 1;
while(valorEmprestimo != 0){
    valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo: "))
    numAnos = parseInt(prompt("Digite o número de anos: "))
    juros = valorEmprestimo * numAnos *taxaDeJuros
    montante = valorEmprestimo + juros
    console.log(montante)
}

// LAÇO DO WHILE (condição testada antes do laço ser executado, caso seja FALSO, não executa o LOOP)

do{
    valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo: "))
    numAnos = parseInt(prompt("Digite o número de anos: "))
    juros = valorEmprestimo * numAnos *taxaDeJuros
    montante = valorEmprestimo + juros
    console.log(montante)
}while(valorEmprestimo != 0)

// BREAK - parar um laço de acordo com condição

while(true){
    valorEmprestimo = parseInt(prompt("Digite o valor do empréstimo: "))
    if(valorEmprestimo === 0){
        break;
    }
    numAnos = parseInt(prompt("Digite o número de anos: "))
    juros = valorEmprestimo * numAnos *taxaDeJuros
    montante = valorEmprestimo + juros
    console.log(montante)
}

// CONTINUE - continuar um laço caso primeira condição seja falsa

for(let i = 1; i <= 20; i++){
    if(i % 2 != 0){
        continue;
    }
    console.log(i)
}

