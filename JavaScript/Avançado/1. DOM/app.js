// Métodos de Acesso:

// querySelector() - acessar Elementos
// querySelector(".") - acessar elementos por classe usamos "."
// querySelector("#") - acessar elementos por id usamos "#"


// getElementById() Acessa elemento pelo ID
// elemento = document.getElementByid("id"); -> manipular atributos, estilos, e acessas os seus pais e filhos

// const paleta1 = document.getElementById('paleta1'); //irá guardar a div na variável
// const paleta2 = document.getElementById('paleta2'); //irá guardar a div na variável
const paleta3 = document.getElementById('paleta3'); //irá guardar a div na variável

// console.log(paleta1)
console.log(paleta2)
console.log(paleta3)

// getElementsByClassName() Acessa elementos pela classe
// elemento = document.getElementsByClassName("classe") -> retorna um conjunto de elementos (HTMLCollection) -> array

const classPaleta = document.getElementsByClassName('paleta');
console.log(classPaleta)
console.log(classPaleta[2])

// getElementsByTagName() Acessa elementos pela Tag
// elemento = document.getElementsByTagName('Tag');

// querySelector(".classe") Seletor de Classes -> retorna um objeto - acessa as divs

// Propriedades para percorrer o DOM:

// parentNode() - > obter o nó pai de um elemento, elemento pai

// pai = elemento.parentNode

const paleta1 = document.querySelector("#paleta1")

console.log(paleta1.parentNode);

// children - > obter elementos filhos de um nó 

// const paletas_div = document.querySelector(".paletas_div");
// console.log(paletas_div.children)

// firstElementChild -> retorna o primeiro filho do elemento
// lastElementChild -> retorna o ultimo filho do elemento

console.log(paletas_div.firstElementChild); //retorna paleta1

// nós irmão - no mesmo nível da árvore DOM

// previousElementSibling -> irmaoAntecessor = elementos.previousElementSibling;
// nextElementSibling -> irmaoSucessor = elemento.nextElementSibling;

const paleta2 = document.querySelector("#paleta2");
console.log(paleta2.previousElementSibling); //retorna paleta1
console.log(paleta2.nextElementSibling); //retorna paleta3

// Criando elementos e add propriedades:

// Cria um novo elemento - createElement("tag do elemento")

const titulo = document.createElement("h1");
titulo.textContent = "To Do List"; //cria um titulo (+ rápido para renderizar) obs: insere somente o conteúdo do texto
// titulo.innerHTML = "To Do List"; insere o conteúdo do texto e se quiser tags html também

console.log(titulo);

// insertBefore() - Add elemento no começo ou no meio dos elementos filhos de certo elemento
// elemento.insertBefore(novoElemento, irmao);

const body = document.querySelector("body");
const paletas_div = document.querySelector(".paletas_div");
body.insertBefore(titulo, paletas_div);

// appendChild() - adiciona um elemento ao final dos elementos filhos de um elemento selecionado(elemento pai)
// elemento = document.createElement("tag do elemento")

const paleta4 = document.createElement("div");
paletas_div.appendChild(paleta4);
console.log(paletas_div);

// classlist - lista de classe de um elemento

paleta4.classList.add("paleta"); //adiciona a classe "paleta" no elemento paleta4
titulo.classList.add("titulo");
// titulo.classList.remove("titulo");

// Remover Elementos:
//removeChild() - remove o filho de um elemento

// const paletas_div = document.querySelector(".paletas_div");
// const paleta2 = document.querySelector("#paleta2");

// paletas_div.removeChild(paleta2);

// loop while removendo todos os primeiros filhos até não ter mais nenhum

while(paletas_div.firstElementChild){
    paletas_div.removeChild(paletas_div.firstElementChild)
}

// Eventos: conjunto de ações realizadas dentro de uma página web

onclick="function()"

onmousemove="function()"

dblclick="function()"

// Eventos de teclado:

// keydown = quando a tecla é pressionada
// keyup = quando a tecla retorna ao estado original
// keypress = quando a tecla esta pressionada

// addEventListener() - anexa um manipulador de evento do elemento especificado

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade();
    }
});


