// KNEX.JS - QUERY BUILDER

const { SELECT } = require('sequelize/lib/query-types');
var database = require('./database.js')

/* INSERT
var dados = [
    {
    nome: 'Call of Duty 2',
    preco: 250, 
    },
    {
        nome: 'GTA V',
        preco: 120, 
    },
    {
        nome: 'Minecraft',
        preco: 0, 
    },
]

database.insert(dados).into("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})]
*/

/* SELECT
database.select(['id']).table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
*/

/* NESTED QUERIES
database.insert({nome: 'Miss of noyah', preco: 45}).into("games").then(data => {
    database.select(['id','preco']).table('games').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err)
})
*/

/* WHERE
database.where({ nome: 50.67 }).table('games').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* RAW
database.raw("SELECT * FROM games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* DELETE
database.where({ id: 3 }).delete().table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* UPDATE
database.where({ nome: 'Minecraft' }).update({ preco: 87}).table('games').then(data => {
    console.log(data) 
}).catch(err => {
    console.log(err)
})
*/

/* ORDER BY
database.select().table('games').orderBy('preco','desc').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* ASSOCIATED INSERTS (studios <> games)
database.insert({
    nome: "Blizzard",
    game_id: 5
}).table("studios").then(data => {
    console.log(data)    
}).catch(err => {
    console.log(err)
})
*/

/* INNER JOIN 1-1
database.select(["games.*","studios.nome as studio_nome"]).table("games").innerJoin("studios", "studios.game_id", "games.id").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
*/

/* 1-M
database.select(["games.*","studios.nome as studio_nome"]).table("games").innerJoin("studios", "studios.game_id", "games.id").then(data => {
    var game = {
        id: 0,
        nome: "",
        studios: []
    }

    game.id = data[0].id;
    game.nome = data[0].nome;
    
    data.forEach(studio => {
        game.studios.push(studio.studio_nome)
    })

    console.log(game)

}).catch(err => {
    console.log(err)
})
*/

/* M-M
database.select([
    "studios.nome as studio_nome",
    "games.nome as game_nome",
    "games.preco as preco" 
]).table("games_studios")
    .innerJoin("games","games.id","games_studios.game_id")
    .innerJoin("studios","studios.id","games_studios.studio_id")
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
*/

// Função de Transação (Proteção do DB) Se alguma transação der erro, as outras ja realizadas são canceladas
async function testTransaction(){
    try {
        await database.transaction(async trans => {
            await database.insert({nome: "EA Sports"}).table("studios");
            await database.insertt({nome: "Mojang"}).table("studios");
        });
    } catch (error) {
        console.log(error)
    }
}

testTransaction();