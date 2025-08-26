const contas = []


function criarConta(nome, saldoInicial) {
  const novaConta = {
    id: contas.length + 1,
    nome: nome,
    saldo: saldoInicial
  }

  contas.push(novaConta)

  return novaConta
}

function buscarContaPorNome(nome) {
  const conta = contas.find(usuario => usuario.nome === nome  )

  return conta
}

function listarContas() {
  return contas
}

module.exports = {
  criarConta,
  buscarContaPorNome,
  listarContas
}