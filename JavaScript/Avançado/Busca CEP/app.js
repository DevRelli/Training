const mensagemErro = document.querySelector("#mensagemErro");
const cepbusca = document.querySelector("#cep");
const logradouro = document.querySelector("#logradouro");
const bairro = document.querySelector("#bairro");
const localidade = document.querySelector("#localidade");
const uf = document.querySelector("#uf");
const btnBuscar =  document.querySelector("#botao_buscar");
const btnLimpar =  document.querySelector("#botao_limpar");
const btnSalvar =  document.querySelector("#botao_salvar"); 
let endereco; 

btnBuscar.addEventListener('click', (e) => {
    e.preventDefault(); 
    try{
        validaCEP();
    }catch(erro){
        mensagemErro.innerHTML = erro.message;
    }
})

function preencheCampo(endereco){
    for(const campo in endereco){
        if(document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = endereco[campo];
        }
    }
}

function buscaEndereco(){
    fetch(`https://viacep.com.br/ws/${cepbusca.value}/json`)
        .then((response) => {
            return response.json();
        })
        .then((endereco) => {
            preencheCampo(endereco);
        })
        .catch((erro) => {
            console.log(erro);
        })
}

function validaCEP(){
    const regex = /^[0-9]{5}[-][0-9]{3}$/;
    if (regex.test(cepbusca.value)){
        buscaEndereco();
        console.log(cepbusca.value)
    }else{
        throw new Error("CEP Inválido")
    }
}

btnLimpar.addEventListener('click', () => {
    limparCampos();
})

btnSalvar.addEventListener('click', () => {
    alert("Dados salvos com sucesso!!!");
    limparCampos();
})

function limpaCampos(){
    cepbusca.value = "";
    logradouro.value = "";
    bairro.value = "";
    localidade.value = "";
    uf.value = "";
    mensagemErro.innerHTML = "";
}



