// model (criar tabela de SQL pelo js) - definir nome com letra maiúscula
const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define("respostas",{
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force: true});

module.exports = Resposta;