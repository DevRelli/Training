/*
   TRATAMENTO DE ERROS 
*/

// Tipos de Erro: Lógico, Sintaxe, Execução

// Lógico: Mais difícil de achar, tomar cuidado e rever a lógica sempre

let soma = 0;
const numeros = [1,2,3,4,5];
for(i = 0; i < 4; i++){     //Erro de lógica no for, no i < 4 ele conta até 4 ou seja vai somar 10, CORRETO: i <= 5 ou i < numeros.length
    soma += numeros[i];
}

console.log(soma);

// Execução: "ReferenceError" - Erro de referencia a variáveis

let y = 1;
if(true){
    let x = y + 10; // x esta dentro do escopo local, e tentamos acessa-lo no escopo global (não é possível)
}
console.log(x);

// TypeError: Erro de função com tipo diferente

// TRY, CATCH, EXCEPT, FINALLY 

try{
    let x = y + 10;
    console.log(x);  //Tenta executar o código
}catch(erro){
    console.log(erro);  
    console.log(erro.name);
    console.log(erro.message);  //Se der errado, execute esse código - informa o nome, tipo e mensagem do ERRO
}finally{
    console.log("Fim da instrução.")//De toda forma, execute esse código (com erro ou sem erro)
}

// THROW - Lança o Erro

function soma(num1,num2){
    if(typeof num1 !== "number"){
        throw TypeError("O primeiro argumento deve ser um número");
    }
    if(typeof num2 !== "number"){
        throw TypeError("O primeiro argumento deve ser um número");
    }
    return num1 + num2;
}

try{
    console.log(soma(10,20));
}catch(erro){
    console.log(erro);
}

try{
    console.log(soma("Enzo",20));
}catch(erro){
    console.log(erro);
}

// EXEMPLO (Sistema de Cadastro)

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

function credenciaisInvalidas(mensagem){
    this.nome = "Credenciais Inválidas";
    this.mensagem = mensagem;
}

function addInfLogin(cliente, email, senha){
    if(email.includes("@") && senha.length > 5){
        cliente.login = {
            email: email,
            senha: senha
        }
        return cliente1;
    }else{
        throw new credenciaisInvalidas("Os dados são inválidos");
    }
}


try{
    const cliente1 = CadastraCliente("Enzo", "Fiorelli", 24, 150000, 9, true,["Isabella", "Ongari", "Luiza"]);
    console.log(addInfLogin(cliente1, "enzo@email.com", "xpto2002"));
}catch(erro){
    console.log(erro);
    console.log("Nome", erro.name);
    console.log("Mensagem", erro.mensagem);
}finally{
    console.log("Deseja realizar uma nova operação?");
}

// Múltiplos TRY/CATCH

try{
    let x = y + 10;
    console.log(x);
}catch(erro){
    if(erro instanceof ReferenceError){
        console.log("ReferenceError");
    }else if(erro instanceof TypeError){
        console.log("TypeError");
    }
}