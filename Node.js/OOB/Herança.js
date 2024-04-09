/*
    Herança 

    -> Reutilizar métodos da classe Mãe com a função super
    ex: super.ChecarEstoque();
    -> Reutilizar constructor com super()

    **Tomar cuidado com herança, geralmente não tem muita necessidade de ter várias**
*/

class Animal{

    constructor(nome,idade,preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
        this.estoque = 20;
    }

    ChecarEstoque(){
        console.log("Checando estoque de Animal...")
        // return this.estoque;
    }

}

class Cachorro extends Animal{  // Classe Cachorro herda da Classe Animal
    
    constructor(nome,idade,preco,raca,peso){ // Reutilizando constructor

        super(nome,idade,preco);
        this.raca = raca;
        this.preso = peso;

    }

    Latir(){
        console.log("ROOF! ROOF!");
    }
    ChecarEstoque(){
        super.ChecarEstoque();
        // return 5; 
    }
}

var dog =  new Cachorro("Thor",5,250,"Pitbull",20);

console.log(dog)

dog.ChecarEstoque();
dog.Latir();