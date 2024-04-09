// Requisições ao servidor -> Requisição -> Output: Resultado da busca (Conexão entre servidores permitindo a conexão de dados)
var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1><h4>github.com</h4>")
}).listen(3000); //Pode colocar a porta que quiser ex: 8181

console.log("Meu servidor está rodando!")

