// Factory Method -> Uma classe com um método que cria objetos
// Projetos com pequenos objetos e componentes com a mesma propriedade
// Criar objeto = invocar função construtora e um operador (função)
import FuncionarioFabrica from "./funcionarios/funcionarioFabrica";
const fabrica = new FuncionarioFabrica();

const funcionarios = [];

funcionarios.push(fabrica.criaFuncionario("CLT", "Manuel"));
funcionarios.push(fabrica.criaFuncionario("PJ", "Pedro"));
funcionarios.push(fabrica.criaFuncionario("Estagiario", "Lucas"));

for (const funcionario of funcionarios) {
    funcionario.apresentaDados();
}