// Padrão Facade -> Fachada realiza comunicação com os sub-sistemas (isolar o código da complexidade de um sub-sistema)
import Hipoteca from "./hipoteca";

const hipoteca = new Hipoteca("Enzo");
console.log(hipoteca.candidatar(100000));