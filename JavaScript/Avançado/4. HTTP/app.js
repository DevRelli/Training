/*
// AJAX - Tecnologias utilizadas para realizar conexões HTTP (Asynchronous JavaScript and XML)
// HTTP - Requests
// O Ajax utiliza o objeto XMLHttpRequest para enviar e receber dados de um servidor
// Métodos Get, Post, Put, Patch, Delete
const listaPosts = document.querySelector("#listaPosts");
const httprequest = new XMLHttpRequest();
// Open - cria conexão entre a API e o servidor
httprequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
// Send - ativa conexão e faz a requisição entre a API e o servidor
httprequest.send({})
// console.log(httprequest);
let posts;
// Response (Resposta) - 
// onreadystatechange - executa quando tem mudança de estado no objeto XML
// state 4 - comunicação finalizada(Response Ok)
httprequest.onreadystatechange = function(){
    if(httprequest.readyState === 4 && httprequest.status === 200){
        // posts = JSON.parse(httprequest.response); // formato JSON
        console.log(httprequest.response);  // formato txt
        // exibePosts();
    }
}

// Método Fecth - busca recursos de forma assíncrona através da rede (retorna uma promise(.JSON ()))

const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then((response) => response.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts)
        exibePosts();
    })

function exibePosts(){
    setTimeout(() => {
        let saida = "";
        posts.forEach((post) => {
            saida += `<li> ${post.title} </li>
                    <li> ${post.body} </li> <hr></hr>`
        });
    listaPosts.innerHTML = saida;
    },3000)
};

// Método Fetch x Post
const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch("https://jsonplaceholder.typicode.com/posts/",{
        method:"POST",
        body: JSON.stringify({
            title: 'new post',
            body: 'corpo do new post',
            userId: 5,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }

    })
    .then((response) => response.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts)
        // exibePosts();
    })
*/
// Método Fetch x Put - atualiza todas as infos do post 
// Patch - atualiza infos específicas
const listaPosts = document.querySelector("#listaPosts");
let posts;

fetch("https://jsonplaceholder.typicode.com/posts/",{
        method:"POST",
        // method:"PATCH",
        body: JSON.stringify({
            title: 'new post',
            body: 'corpo do new post - atualização',
            userId: 5,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }

    })
    .then((response) => response.json())
    .then((json) => {
        posts = json;
    })
    .then(() => {
        console.log(posts)
        // exibePost
    })

