// Padrão Singleton -> apenas uma instância a sere exibida e usada na aplicação
// Apenas um ponto de acesso central ao sistema da classe
import Carrinho from "./carrinho.js";


const carro1 = new Carrinho();

// console.log(carro1.listaDeProdutos);
// console.log(carro1.valorTotal);
carro1.adicionaProduto();
console.log(carro1.listaDeProdutos);

const carro2 = new Carrinho();
console.log(carro2.listaDeProdutos);
