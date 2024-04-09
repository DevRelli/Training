// Métodos Estáticos = acessar os métodos sem criar nenhuma instância (new Calculadora)

class Calculadora{

    static Somar(a,b){
        console.log(a+b)
    }
    static Sub(a,b){
        console.log(a-b)
    }

}

Calculadora.Somar(2,2);
Calculadora.Sub(2,1);