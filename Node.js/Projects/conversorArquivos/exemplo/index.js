const fs = require("fs"); // Módulo para manipular pastas e arquivos (File-System)

// Leitura e Escrita de Arquivo

function ModificaJson(nome){

    fs.readFile("Projects/conversorArquivos/user.json",{encoding: "utf-8"},(err,dados) =>{

        if(err){
            console.log("")
        }else{
            
            var conteudo = JSON.parse(dados); // Converte texto para objeto JS (JSON.parse)

            conteudo.nome = nome;

           fs.writeFile("Projects/conversorArquivos/user.json", JSON.stringify(conteudo),(err)=>{ // Converte objeto JS para texto (JSON.stringify)
                if(err){
                    console.log(err)
                }else{

                }
           }) 
        }
    })

}

ModificaJson("Enzo Fiorelli")

