// Importação do framework Sequelize

const Sequelize = require('sequelize');

// Instânciando o objeto Sequelize

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './varejo.sqlite'
});

// Tratamento de erros 
try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso");
} catch(erro){
  console.log("Erro ao conectar ao banco", erro);
}

module.exports = sequelize;