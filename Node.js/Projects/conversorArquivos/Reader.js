const fs = require("fs");
const util = require("util"); // Módulo com scripts úteis

// var funcaoNovaComPromise = util.promisify(funcaoVelhaComCallback); Retorna nova função em variável

class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath){
        try{
            return await this.reader(filepath,"utf-8");
        }catch(err){
            return err;
        }
    }

}

module.exports = Reader;