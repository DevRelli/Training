// Programação Orientada a Objetos (POO) -> 
// Modelar coisas do mundo real dentro dos nosso programas 
// Fornecer uma maneira simples de acessaR funcionalidades

// Prototypes -> objeto modelo que herda métodos e propriedades

// verificação de tipo: instanceof 

// Classes -> características e comportamentos que definem o conjunto de objetos pertencentes a essa classe

// Abstração: facilitar o trabalho com os objetivos do programa

// Encapsulamento: capacidade de um método ou atributo de um objeto de se manter invisível
// * atributo ou método privado (não pode ser acessado ou usado fora da classe) ex: #nome;
// * getters e setters (get: retorna valor atual fa variável, set: altera o valor da variável)

// Herança - herdando propriedades e métodos - Filho extends Pai

class Pessoa{
    // Atributos
    nome;
    sobrenome;
    idade;
    #cpf;

    constructor(nome,sobrenome,idade,cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.#cpf = cpf;
    }
    // Métodos
    saudacao(){
        console.log(`Olá meu nome é ${this.nome} ${this.sobrenome}, e tenho ${this.idade} anos.`)
    }
    get cpf(){
        return this.#cpf;
    }
    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }
}

class Aluno extends Pessoa{
    turma;
    serie;
    constructor(nome,sobrenome,idade,cpf,turma,serie){
        super(nome,sobrenome,idade,cpf);
        this.turma = turma;
        this.serie = serie;

    }
    saudacao(){
        console.log(`Olá meu nome é ${this.nome}, e estou na ${this.serie}° série.`)
    }
}

class Professor extends Pessoa{
    disciplina;
    horas;
    constructor(nome,sobrenome,idade,cpf,disciplina,horas){
        super(nome,sobrenome,idade,cpf);
        this.disciplina = disciplina;
        this.horas = horas;
    }
    saudacao(){
        console.log(`Olá meu nome é ${this.nome}, e sou professor de ${this.disciplina}.`)
    }
}
const ivan = new Professor("Ivan","Silva",40,43243255,"IA",60);
const enzo = new Aluno("Enzo","Fiorelli",21,53395846822,"A",2);

console.log(ivan);
ivan.saudacao();
console.log(enzo);
// enzo.cpf = 75403802393;
// console.log(enzo.cpf);
enzo.saudacao();

