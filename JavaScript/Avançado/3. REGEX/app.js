// Expressões Regulares - Busca, Validação, Substituição

// É uma linguagem de busca de padrões


// Método Test => verifica se a variável possui a expressão

const stringTest = "Hello World!!";
const regex = /Hello/;
console.log(regex.test(stringTest)); //retorna True

const regexH = /H/;
const regexl = /l/;

console.log(regexH.test(stringTest));
console.log(regexl.test(stringTest));

const regexW = /w/i; //ignora o case sensitive e retorna true mesmo com o w em minúsculo
console.log(regexW.test(stringTest)); 

const stringTest1 = "Exemplo: Hello World!!!";
const regexComeco = /^Hello/; //para os 1° caracteres
const regexFinal = /!!!$/; //para os últimos caracteres

console.log(regexComeco.test(stringTest1)); //False
console.log(regexFinal.test(stringTest1)); //True

// PESQUISAS => Utilizar ctrl + f

// ^[0-9]{6}$ -> retorna a linha que vai ter exatamente 6 caracteres entre os numeros 0 a 9
// [range de números]{quantificador}[caractere][range de letras]
// ^[0-9]{6}[-][B]$

// Método Match ou Exec => recupera o resultado da correspondência de uma string com uma regex(expressão regular)

let produtos = "324543-B\n4523523-A\n54328-D";
console.log(produtos);
// const regex = /[0-9]+[-][A-Z]/g; [B] só com final B, a letra "g" busca por padrões
const resultado = produtos.match(regex);
// const resultado = regex.exec(produtos);
console.log(resultado);

// Método Replace => substitui o regex antigo pelo novo

const valor = "R$ 1850,99";
const regexValor = /(R\$) ([0-9]{4})[,]([0-9]{2})/;
const regexValorNome = /(?<moeda>R\$) (?<inteiro>[0-9]{4})[,](?<centavos>[0-9]{2})/;
const data = regexValorNome.exec(valor);
console.log(data.groups.moeda);
console.log(data.groups.inteiro);
console.log(data.groups.centavos);

console.log(valor.replace(regexValor, '$ $2.$3'))

