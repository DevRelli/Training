const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

// Database connection
async function DB_Access(){
    try{
        connection.authenticate()
        setTimeout(() => {
            console.log(`DB STATUS: Connected`);
        },250);
    }catch(err){
        console.log(err)
    }
}

DB_Access();

// Usar o EJS como view engine (renderizador de HTML pelo Express)
app.set(`view engine`,`ejs`);
app.use(express.static('public'));
// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Rotas
app.get("/perguntas", (req,res) => {
    Pergunta.findAll({ raw: true, order:[
        ['id','DESC'] // ASC = Crescente || DESC = Decrescente
    ]}).then(perguntas => {
        res.render("index",{
            perguntas: perguntas
        });
    });  
});

app.get("/perguntas/:id",(req,res)=>{
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id} // Busca do id dentro do banco de dados SQL
    }).then(pergunta=> {
        if(pergunta == undefined){ // Pergunta não existe
            res.send("Pergunta não encontrada!!");
        }else{ // Pergunta encontrada

            Resposta.findAll({
                order: [['id','DESC']],
                where: {perguntaId: pergunta.id}
            }).then(respostas =>{
                res.render("pergunta",{
                    pergunta: pergunta,
                    respostas: respostas
                });
            })    
        }
    });
    

})

app.get("/perguntar", (req,res)=>{
    res.render("perguntar");
});

app.post("/salvarpergunta",(req,res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        if(titulo == '' || descricao == ''){
            res.send(`Título e Descrição obrigatórios`)
        }else{
            res.redirect('/perguntas')
        }
    }
)});

app.post("/resposta",(req,res)=>{
    var resposta = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({ // Nome das colunas
        corpo: resposta,
        perguntaId: perguntaId
    }).then(()=>{
        res.redirect(`/perguntas/${perguntaId}`);
    });
}); 

app.listen(2002,() => {console.log("API Online!");});
