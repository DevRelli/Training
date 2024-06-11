const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const JWTsecretKey = "rriejfwedsjfdwçouffds"

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function auth(req, res, next){  // Middleware => Função que é executada antes da rota completar a requisição

    const authToken = req.headers['authorization'];
    
    if(authToken!=undefined){

        const bearer = authToken.split(' ');
        var token = bearer[1]

        jwt.verify(token, JWTsecretKey, (err, data) => {
            if(err){
                res.status(401)
                res.json({err: "token inválido!"})
            }else{

                req.token = token;
                req.loggedUser = {id: data.id, email: data.email}
                next();

            }
        })

    }else{
        res.status(401)
        res.json({err: "token inválido!"})
    }

}

var DB = { 
    games: [
        {  
            id: 1,
            title: "God Of War: Ragnarok",
            price: 349.99,
            year: 2018
        },
        {
            id: 2,
            title: "Minecraft",
            price: 70.00,
            year: 2012
        },
        {
            id: 3,
            title: "Fortnite",
            price: 0.00,
            year: 2020
        }
    ],
    users: [
        {
            id: 1,
            nome: "Enzo Fiorelli",
            email: "enzofiorelli@hotmail.com",
            password: "teste123"            
        },
        {
            id: 2,
            nome: "Relli",
            email: "relli@hotmail.com",
            password: "teste123"            
        }

    ]

}

app.get('/games', auth, (req,res) => {
    res.statusCode = 200;
    res.json({user: req.loggedUser, data: DB.games})
});

app.get('/game/:id', auth, (req,res) => {

    const id = parseInt(req.params.id);

    if(isNaN(id)){ // Função que verifica se id é número ou não (is Not a Number)
        res.sendStatus(400) // Requisição Inválida : Bad Request
    }else{
        
        const game = DB.games.find(g => g.id = id);

        if(game === undefined){
            res.sendStatus(404) // Erro Not Found
        }else{
            res.statusCode = 200;
            res.json(game);
        }

    } 

});

app.post("/game", (req,res) => {

    var {title, price, year} = req.body

    DB.games.push({
        id: DB.games.length + 1,
        title,
        price,
        year,
    });

    res.sendStatus(200);

}) 

app.delete("/game/:id", (req,res) => {

    const id = parseInt(req.params.id);

    if(isNaN(id)){ // Função que verifica se id é número ou não (is Not a Number)
        res.sendStatus(400) // Requisição Inválida : Bad Request
    }else{
        
        const index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index,1)
            res.sendStatus(200);
        }
    }


});

app.put("/game/:id", (req,res) => {

    if(isNaN(req.params.id)){ // Função que verifica se id é número ou não (is Not a Number)
        res.sendStatus(400) // Requisição Inválida : Bad Request
    }else{

        var id = parseInt(req.params.id)

        var game = DB.games.find(g => g.id = id);

            if(game === undefined){
                res.sendStatus(404); // Erro Not Found
            }else{

                var {title, price, year} = req.body;

                if(title != undefined){
                    game.title = title;
                }
                if(price != undefined){
                    game.price = price;
                }
                if(year != undefined){
                    game.year = year;
                }


                res.statusCode = (200);
            }

    } 
})

app.post("/auth", (req,res) => {

    var { email, password } = req.body

    if(email != undefined){

        var user = DB.users.find(user => user.email == email)

        if(user != undefined){

            if(user.password == password){

                jwt.sign({ id: user.id, email: user.email, }, JWTsecretKey, {expiresIn: '48h'}, (err, token) => {
                    if(err){
                        res.status(400)
                        res.json({err: "Falha interna"})
                    }else{
                        res.status(200)
                        res.json({token: token})
                    }
                })
            }else{

                res.status(401)
                res.json({err: "credenciais inválidas"})
            }

        }else{
            res.status(404)
            res.json({err: "email não existe na base de dados"})
        }

    }else{
        res.status(400);
        res.json({err: "email inválido"})
    }
})

app.listen(2002, () => {
    console.log("API Online! Port: 2002");
});
