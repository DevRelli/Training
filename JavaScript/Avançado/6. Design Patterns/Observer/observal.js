export default class Observable{
    constructor(){
        this.observadores = [];
    }
    cadastrar(observador){
        this.observadores.push(observador);
    }
    remover(observador){
        this.observadores = this.observadores.filter(subscriber => subscriber)
    }
    notificar(dados){
        this.observadores.forEach(observador => observador(dados));
    }
}