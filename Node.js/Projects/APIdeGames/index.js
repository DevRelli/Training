const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var Data = { 
    games: [
        {  
            id: 1,
            nome: "God Of War: Ragnarok",
            preco: 349.99
        },
        {
            id: 2,
            nome: "Minecraft",
            preco: 70.00
        },
        {
            id: 3,
            nome: "Fortnite",
            preco: 0.00
        }
    ]

}

app.get('/games', (req,res) => {
    // res.statusCode = 200;
    res.json(Data.games)

});

app.get('/game/:id', (req,res) => {

    const id = parseInt(req.params.id);

    if(isNaN(id)){ // Função que verifica se id é número ou não (is Not a Number)
        res.sendStatus(400) // Requisição Inválida : Bad Request
    }else{
        
        const game = Data.games.find(g => g.id = id);

        if(game === undefined){
            res.sendStatus(404) // Erro Not Found
        }else{
            res.statusCode = 200;
            res.json(game);
        }

    } 

});

app.post("/game", (req,res) => {

    var {id, nome, preco} = req.body

    Data.games.push({
        id,
        nome,
        preco,
    });

    res.sendStatus(200);

}) 

app.delete("/games/:id", (req,res) => {

    const id = parseInt(req.params.id);

    if(isNaN(id)){ // Função que verifica se id é número ou não (is Not a Number)
        res.sendStatus(400) // Requisição Inválida : Bad Request
    }else{
        
        const index = Data.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            Data.games.splice(index,1)
            res.sendStatus(200);
        }
    }


});

app.put("/game/:id", (req,res) => {

    if(isNaN(id)){ // Função que verifica se id é número ou não (is Not a Number)
        res.sendStatus(400) // Requisição Inválida : Bad Request
    }else{
        const id = parseInt(req.params.id);
        const game = Data.games.find(g => g.id = id);

            if(game === undefined){
                res.sendStatus(404); // Erro Not Found
            }else{

                var {nome, preco} = req.body;

                if(nome != undefined){
                    game.nome = nome;
                }
                if(preco != undefined){
                    game.preco = preco;
                }

                res.statusCode = (200);
            }

    } 
})

app.listen(2002, () => {
    console.log("API: Online!");
});
