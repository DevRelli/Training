class Dado{

    constructor(faces){
        this.faces = faces;
    }

    Sortear(){

        console.log("Os dados estão girando...");

        setTimeout(() => {
            console.log(`Resultado: ${this.getRandomIntInclusive(1,this.faces)}`)
        },1000);
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

}

var rodada1 = new Dado(6);
rodada1.Sortear();