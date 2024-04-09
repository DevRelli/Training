// Aplicar valores padrões a variáveis, parâmetros opcionais

function soma(a = 80,b = 50){
    return a + b;
}
function sub(a,b, inverter = false){

    if(inverter){
        console.log(b-a)
    }else{
        console.log(a-b)
    }
    
}

// JSONs encurtados e Operador Spread

var empresa = {
    nome: "Samsung",
    cidade: "SP",
    site: "samsungsds.com.br"
}

var user = {
    nome: "Enzo Fiorelli",
    idade: 21,
    ...empresa // Copia campos do objeto empresa (Spread)
    // empresa: empresa.nome,
    // empresa: empresa.cidade
    // empresa: empresa.site
}

console.log(user)

// Operator Destructuring - Desestruturação (extrai campos e transforma em var)

var { nome,idade } = user; // Transforma campo do objeto em variável

console.log(nome);
console.log(idade)

// Arrow function

var mult = (a,b,c) => {
     return a * b * c;
}

var mult_uma_linha = (a,b,c) => a * b * c;

var resultado = mult(2,2,2) // 8

console.log(resultado)

// Método Find em um Array

var Enzo = {
    nome: "Enzo Fiorelli",
    empresa: "Samsung",
    salario: 2500
} // Verificar(); => true

var Luccas = {
    nome: "Luccas Fiorelli",
    empresa: "HCI",
    salario: 15000
} // Verificar(); => false

var users = [Enzo, Luccas];

// Verificar() - arrow function

var user = users.find(user => user.nome === "Enzo Fiorelli"); 
var empresa = users.find(user => user.empresas === "HCI");
var salario = users.find(user => user.salario > 800) 
console.log(salario) // Enzo, retorna o primeiro user que achar
console.log(empresa); // Luccas
console.log(user); // Enzo 

// Template Literal

var nome = "Enzo Fiorelli"
var sobre = "Trapper"

var frase = `Eu sou ${nome} e sou um ${sobre}`





