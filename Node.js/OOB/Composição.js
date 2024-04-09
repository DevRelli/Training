/*
    Construindo Classe com composição...

*/

class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor =  new Escritor();
        this.criador = new Criador();
        this.destruidor =  new Destruidor();
    }

}

// Componentes:

class Leitor{
    Ler(caminho){
        return "Conteúdo do arquivo!"
    }
}

class Escritor{
    Escrever(arquivo, conteudo){
        console.log("Conteúdo escrito")
    }
}

class Criador{
    Criar(nome){
        console.log("Arquivo criado!")
    }
}

class Destruidor{
    Deletar(nome){
        console.log("Deletando...")
    }
}

var manipulador = new ManipuladorDeArquivo("Teste.csv")

manipulador.leitor.Ler()
manipulador.criador.Criar()