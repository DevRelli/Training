// O Express é um Framework(Super Biblioteca) para construir aplicações web com node.js
// npm install express --save

// VAR, LET, CONST
// Dicas = > declarar variáveis globalmente.
// Para variável usada somente dentro da função (Local)

// VAR => Escopo Global e Local
// LET => Escopo Global, Local, Bloco {}

// Instalar bibliotecas globalmente no seu notebook, usando o "-g" ao final da expressão: npm install nodemon -g

const express = require("express"); // Importando o express
const app = express(); // Iniciando o express com uma variável

app.get('/',function(req, resp){
    resp.send("Bem Vindo ao meu Servidor!"); // A resposta só pode ser enviada UMA vez
}); //Definindo rota inicial (nome da rota) = caminhos para a página criada

// Rota com endpoint "blog"
app.get('/blog/:artigo?', function(req, resp){ // ? => parâmetro opcional
    
    var artigo = req.params.artigo;

    if(artigo){
        resp.send("Artigo: " + nome);
    }else{
        resp.send("Bem Vindo ao meu blog!");
    }
});

app.get('/canal/youtube', function(req, resp){
    var canal = req.query[''];

    if(canal){
        resp.send(canal);
    }
        resp.send('Nenhum canal fornecido!');
})

app.get('/:nome/:empresa', function(req, resp){
   // REQ = requisição feita pelo user, dados enviados pelo user
   // RESP = reposta enviada para o user
    const nome = req.params.nome;
    var empresa = req.params.empresa;
    resp.send("<h1>Oi " + nome + " da " + empresa + "</h1>")
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu algum erro!")
    }else{
        console.log("Servidor Iniciado com Sucesso!")
    }
}) // Output: Cannot Get / -> Erro acontece porque não existe nenhuma rota na aplicação