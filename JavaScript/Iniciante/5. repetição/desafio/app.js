// LOJA DE ARTIGOS 1,99 - TABELA COM NÚMERO DE ITENS COMPRADOS E O PREÇO

// console.log("Loja de artigos 1,99$ - Itens x Preço")
// let preco = 1.99;
// let itens;

// itens = parseInt(prompt("Digite a quantidade de itens desejados: "))

// for(let i = 1; i <= itens; i++){
//     console.log(i + "  - R$ " + i*preco);
// }

// DPTO DE METEOROLOGIA - LER TEMPERATURAS E TIRAR A MEDIA DESSAS TEMPERATURAS

console.log("Dpto de Meteorologia - Temperaturas e suas médias:")

let temp;
let somaTemp = 0;
let numTemp = 0;

while(true){
    temp = parseFloat(prompt("Digite a Temperatura"));
    if(temp === 0){
        break;
    }
    somaTemp += temp;
    numTemp += 1;
}

let media = (somaTemp/numTemp)

console.log(media)