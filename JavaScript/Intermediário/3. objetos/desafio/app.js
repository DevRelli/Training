const user = {
    nome: "Enzo",
    email: "enzo@gmail.com",
    senha: "654321"
}

function omitirSenha(senha){

    let novaSenha = "";

    for(let i = 0; i < senha.length; i++){
        novaSenha += "*";
    }
    return novaSenha;
}

user.senha = omitirSenha(user.senha)
console.log(user)

// VER OQ ERROU NA LOGICA -SEMPRE IR PELO BÁSICO (Arroz com Feijão), COD DE CIMA

// function omitirSenha(senha){

//     let novaSenha = "";

//     user.senha.forEach(senha => {
//         novaSenha += "*";
//     });
//     return novaSenha;
// }

// console.log(omitirSenha(user.senha))