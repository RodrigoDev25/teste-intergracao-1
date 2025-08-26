const bancoModel = require('./banco.model');

function createAccount(nome, saldoInicial, idade) {

  if(!nome) {
    return 'nome é obrigatório'
  }

  if(saldoInicial < 0) {
    return 'saldo inicial não pode ser negativo'
  }

  if(nome === 'admin') {
    return 'nome de usuário não pode ser admin'
  }

  if(idade < 18) {
    return 'idade mínima é 18 anos'
  }

  return bancoModel.criarConta(nome, saldoInicial)
}

function getAccountByName(nome) {

  if(!nome) {
    return 'nome é obrigatório'
  }

  return bancoModel.buscarContaPorNome(nome)
}

function listAccounts() {
  return bancoModel.listarContas()
}

module.exports = {
  createAccount,
  getAccountByName,
  listAccounts
}