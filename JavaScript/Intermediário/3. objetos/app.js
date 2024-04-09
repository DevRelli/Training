/*
    OBJETOS - Coleção de Dados no JS

    -> Objetos são compostos por uma coleção de propriedades (armazena dados) -> dados = {Chave: Valor}

    *** Objeto = {Chave: Valor} ***

    -> Quando esses propriedade armazenam FUNÇÃO chamamos ela de MÉTODO
*/

// Notação Literal

const carro = {
    nome: "Mustang",
    marca: "Ford",
    cor: "Preto",
    ano: 2021,
    emplacado: true,
    motor: [126, 1.6]
};

// Adicionar propriedades
carro.consumo = 11;
carro.capacidadeTanque = 45;

// Removendo propriedades
delete carro.emplacado;

// Atualizar valor
carro.cor = "Azul";
console.log(carro.cor); // Azul

carro.nome;
console.log(carro.nome); //ou (carro['nome']);

// ARMAZENAR MÉTODO EM OBJETO

const carro1 = {
    nome: "Mustang",
    marca: "Ford",
    cor: "Preto",
    ano: 2021,
    emplacado: true,
    consumo: 11,
    capacidadeTanque: 45,
    // objetos aninhados:
    motor: {
        cavalos: 126,
        cilindrados: 1.6
    },
    kmPercorridos: function(){
        return `O ${this.nome} percorre ${this.consumo * this.capacidadeTanque} Km com um tanque cheio.`;
    }
};

carro1.kmPercorridos();


// EXEMPLO: (Sistema de Cadastro) =>

function CadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente,
    valorEmprestimoCliente, numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliente){
        let cliente1 = {
            nome: nomeCliente,
            sobrenome: sobrenomeCliente,
            idade: idadeCliente,
            emprestimo: {
                valorEmprestimo: valorEmprestimoCliente,
                numAnos: numAnosCliente,
                ehBomPagador: ehBomPagadorCliente,
                taxaDeJuros: defineTaxa(idadeCliente),
                avalistas: avalistasCliente
            },
            adicionaAvalistas: function(avalista){
                this.emprestimo.avalistas.push(avalista)
            },
            removeAvalistas: function(avalista){
                this.emprestimo.avalistas.pop(avalista)
            },
            editaAvalistas: function(nomeAvalista, indice){
                this.emprestimo.avalistas[indice] = nomeAvalista;
            },
            ordenaAvalistas: function(){
                this.emprestimo.avalistas.sort()
            },
            exibeAvalistas: function(){
                this.emprestimo.avalistas.forEach(avalista, indice => {
                console.log(`O ${indice + 1} avalista é ${avalista}.`)
                });
            }
        }
        return cliente1;
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

const cliente1 = CadastraCliente("Enzo", "Fiorelli", 24, 150000, 9, true,["Isabella", "Ongari", "Luiza"])

cliente1.adicionaAvalistas("Luis");
cliente1.adicionaAvalistas("Regi");

cliente1.removeAvalistas();

cliente1.editaAvalistas("Gabriel", 1);
cliente1.ordenaAvalistas();

cliente1.exibeAvalistas();

console.log(cliente1.emprestimo.avalistas);

// MÉTODOS DOS OBJETOS

// Keys() retorna um array de string que representa as chaves de cada propriedade

const chaves = Object.keys(carro1);

// Values() retorna um array com os valores de cada propriedade

const valores = Object.values(carro1);

// Entries() retorna um array cujo os elementos também são arrays que correspondem aos pares de propriedade [chave:valor]

const tuplas = Object.entries(carro1);
console.log(tuplas); //["nome", "Fiesta"], ["marca", "Ford"]

// Assign() copia as propriedades de um objeto de origem para um objeto de destino

const carro2 = Object.assign(carro1);
console.log(carro2)

// DESESTRUTURANDO OBJETOS

// Percorrendo Objetos com FOR OF:

const carro3 = {
    nome: "Mustang",
    marca: "Ford",
    cor: "Preto",
    ano: 2021,
    consumo: 11,
    motor:{
        cavalos: 126
    }
}
for (const [chave, valor] of Object.entries(carro3)) {
     console.log(`${chave}:${valor}.`)
}

// const propriedade = objeto.propriedade;
// const {propriedade} = objeto;

const{nome, marca, cor, ano, consumo, motor: {cavalos}} = carro3;

// OBJETO STRING 

// Includes() verificar a presença de um valor 

let meuNome = "Enzo";
meuNome.indexOf("nzo"); // 2 - retorna 2 -> posição da primeira letra
meuNome;indexOf("Isa"); // -1 - retorna -1 por não encontrar o valor

let emailValido = "enzo@email.com";
emailValido.includes("@"); //true

let emailInvalido = "enzo.email.com";
emailInvalido.includes("@"); //false

emailValido.toLowerCase();
emailValido.toUpperCase();
emailValido.replace("enzo","isa");

// APLICAÇÃO SISTEMA DO BANCO: includes()

function addInfLogin(cliente, email, senha){
    if(email.includes("@") && senha.length > 5){
        cliente.login = {
            email: email,
            senha: senha
        }
        return cliente1;
    }else{
        return "Credenciais Inválidas";
    }
}

console.log(addInfLogin(cliente1, "enzo@email.com", "xpto2002"));
console.log(addInfLogin(cliente1, "enzo@email.com", "2002"));

// Percorrendo uma String: 

function Cebolinha(frase){

    let fraseCebola = "";

    for(let letra of frase){
        if(letra === "r"){
            fraseCebola += "l";
        }else{
            fraseCebola += letra;
        }
    } 
    return fraseCebola;  
}

console.log(Cebolinha("rato"));



