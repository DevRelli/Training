// Iterator -> construções de loops flexíveis, objeto iterator encapsula todos os detalhes
// Código percorre diferentes estruturas de dados
import Iterator from "./iterator";

const itens = ["carro",2023,"2.0",true]
const iterator = new Iterator(itens);

for(let item = iterator.primeiro(); iterator.verificaSeguinte(); item = iterator.proximo()){
    console.log(item);
}

console.log("");

iterator.each(function(item){
    console.log(item)
})
