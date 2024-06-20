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

