// promises() => promessa, função te promete fazer algo, pode ser cumprida ou não (Resolve, Reject)

function getId(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(5)
        }, 1500)
    })
}

function getEmailBank(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("enzofiorelli@github.com")
        }, 2000);
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => { // "Eu prometo que..."
        setTimeout(() => {

            var deuErro = false;
            
            if(!deuErro){
                console.log("Tudo Ok!")
                resolve({time: 6, to: "enzofiorelli@github.com"}) // Promessa Resolvida! obs: somente um parâmetro
            }else{
                reject("Falha na promessa!") // Foi mal, eu falhei :(
            }
        }, 4000)
    });
}

// getId().then((id) => {
//     getEmailBank(id).then((email) => {
//         enviarEmail("Olá, como vai?",email).then(() => {
//             console.log(`Email enviado, para o user de id: ${id} `)
//         }).catch(err => {
//             console.log(err)
//         })
//     })
// })

async function SendEmail_Main(){
    let id = await getId(); // Espere a Promise ser concluída <=> *código bloqueante*
    let email = await getEmailBank(id);

    try{
        enviarEmail("Olá como vai?", email) // Parte do código que será executado de forma Síncrona!
        console.log(`
        -------------
        Email enviado!, para o user de id: ${id}
    `)
    }catch(err){ // Tratamento de erros com
        console.log(err);
    }

}

SendEmail_Main()

