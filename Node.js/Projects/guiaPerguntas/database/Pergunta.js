// model (criar tabela de SQL pelo js) - definir nome com letra maiúscula
const Sequelize = require('sequelize');
const connection = require('./database');

// Criação de tabela dentro do MySQL Workbench
const Pergunta = connection.define('pergunta',{
     titulo:{
        type: Sequelize.STRING,
        allowNull: false
     },
     descricao:{
        type: Sequelize.TEXT,
        allowNull: false
     }
});

Pergunta.sync({force: false}).then(() => {});

module.exports = Pergunta;