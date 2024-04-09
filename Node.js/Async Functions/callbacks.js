// setTimeOut => tempo de espera para poder executar a função "Delay"

// callback() => função a ser executada quando a função pai for terminada

function EnviarEmail(corpo, email,callback){
    setTimeout(() => {
        // console.log(`
        //     Para: ${email}
        //     --------------
        //     Corpo: ${corpo}
        //     --------------
        // `)

        // Tratativa de Erro com callback

        var deuErro =  false

        if(deuErro){
            callback(12,"O envio do e-mail falhou!")
        }else{
            callback(12)
        }

        // callback("OK",1,"5s")

    },5000)
}

EnviarEmail("Oi, seja bem-vindo","enzofiorelli@github.com",(time,erro)=>{
    // console.log(`
    //     Status: ${status}
    //     -----------------
    //     Contatos: ${amount}
    //     -----------------
    //     Tempo de envio: ${time}
    
    // `)
    if(erro == undefined){
        console.log(`Tempo: ${time}s`)
    }else{
        console.log(`Ocorreu um erro: ${erro}`)
    }
    console.log("Tudo OK!")
})




