/*
    Classe Vs Objetos:

    A Classe serve como modelo para a criação de um Objeto

    Classe => Um modelo de dados a ser usado (ficha)

    Objeto => Dados a serem inseridos (o que você preencheu na ficha)

    Exemplo de Classe criada fora do escopo, recomendação...
    
*/
class Filme{

    constructor(titulo,ano,genero,diretor,duracao){
        // Atributos:
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.duracao = duracao;
        this.atores = [];    
    }
    // Métodos:
    Reproduzir(){
        console.log("Reproduzindo...")
    }
    Pausar(){
        console.log("Pausado!")
    }
    Avançar(){
        console.log("Avançar >>")
    }
    Fechar(){
        console.log("Exit X")
    }
    Ficha(){
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Ano de lançamento: ${this.ano}`)
        console.log(`Gen: ${this.genero}`)
        this.Reproduzir();
    }
}

// Objetos: (acessando Métodos e Atributos)

// this = representa o Objeto starWars = new Filme(); => starWars.titulo

var starWars = new Filme("Star Wars 3",2002,"Ação","Jack","2:30h");

starWars.Ficha();

// console.log(`
//     ${starWars.titulo},
//     ${starWars.ano},
//     ${starWars.genero}
// `)


