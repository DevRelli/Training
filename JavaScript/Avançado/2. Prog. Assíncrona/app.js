/*Programação Assíncrona*/

// Código síncrono - > quando um comando é executado somente quando o anterior estiver terminado
// Pode gerar um código bloqueante - bloqueia as outras instruções até que a anterior seja executada
// API(Interface de Programação de Aplicação) - Requisição -> Resposta

// Código Assíncrono - instruções executadas sem ordem definida -> + desempenho

// setTimeout(funcão, delay(ms), parâmetros) - demora pra acessar valores - console log de acordo com o tempo setado

// console.log("Uma Linda Mulher");
// setTimeout(console.log, 1500, "O Contratempo");
// // console.log("O Contratempo");
// console.log("Harry Potter");

// console.log("Olá,");
// setTimeout(console.log, 1500, "Fiorelli");
// console.log("Enzo");

// .innerHTML = insere a tag do HTML junto com o conteúdo do texto
// .textContent =  insere somente o conteúdo do texto

// LOCADORA:

const listaFilmes = document.querySelector("#listaFilmes");

const  filmes = [
    {nome: "Gente Grande", genero: " Comédia"},
    {nome: "Até o Último Homem", genero: "Guerra"},
    {nome: "Nike: Air", genero: "Drama"}
];

const criaElementosUi = function(){
    let aux = "";
    filmes.forEach((filme) => {
        aux += `<li> Nome: ${filme.nome}, Gênero: ${filme.genero}`;

    });
    listaFilmes.innerHTML = aux;
}

function exibeFilmes(){
    setTimeout(criaElementosUi, 250 );
}

function addFilmes(filme){ //callback(): chama a função pra ser executada após a função original
    const promise = (resolve,reject) =>{
        setTimeout(()=>{
            if(filme.nome == ""){
                reject(new Error("Nome Inválido"))
            }else{
                filmes.push(filme);
                resolve(filme);
            }
        }, 500);
    }
    return new Promise(promise);
}

async function funcaoAsync(){
    try{
        const UmFilme = await addFilmes({nome: "O Contratempo", genero: "Suspense"});
        console.log(UmFilme);
        await addFilmes({nome: "Velozes e Furiosos 1", genero: "Ação"});
        await addFilmes({nome: "Velozes e Furiosos 2", genero: "Ação"});
        await addFilmes({nome: "Velozes e Furiosos 3", genero: "Ação"});
        //await addFilmes({nome: "", genero: "Ação"});
        exibeFilmes();
    }catch(erro){
        console.log(erro)
    }
}

funcaoAsync();

// 

// addFilmes({nome: "O Contratempo", genero: "Suspense"})
//     .then(()=>{
//         return addFilmes({nome: "Velozes e Furiosos", genero: "Ação"})
//     })
//     .then(exibeFilmes)
//     .catch((erro)=>{
//         console.error(erro);
//     })

// // PROMISE: Objeto que representa uma conclusão ou falha eventual de uma operação assíncrona

// function exibeNome(nome){
//     const promise = (resolve, reject) =>{
//         setTimeout(() => {
//             if(nome === "Enzo"){
//                 resolve(nome);
//             }else{
//                 reject(new Error("Nome Inválido"))
//             }

//         }, 1000);
//     }
//     return new Promise(promise);
// }

// function exibeSobrenome(){
//     console.log("Fiorelli")
// }

// async function funcaoAsync(){
//     try{
//         const meuNome = await exibeNome("Isa");
//         console.log(meuNome);
//         await exibeSobrenome();
//         await console.log("Tudo bem?")
//         await console.log("Quantos anos você tem?")
//     }catch(erro){
//         console.error(erro);
//     }

// }

// console.log("Olá, ");
// funcaoAsync();

// console.log("Olá,");
// exibeNome("Enzo")
//     .then((resposta) =>{
//         console.log(resposta);
//     })
//     .then(exibeSobrenome)
//     .then(() => {
//         console.log("Tudo bem?");
//     })
//     .then(() => {
//         console.log("Quantos anos você tem?")
//     })

// Async : indica que a função possui código assíncrono
// Await: indica um ponto a ser aguardado pelo código, ele espera o retorno de uma promise ser resolvido