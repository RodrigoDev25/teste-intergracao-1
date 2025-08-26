const bancoService = require("./banco.service");

test("Deve criar uma conta com sucesso", () => {
  const conta = bancoService.createAccount("Kaique", 1000);
  expect(conta.nome).toBe("Kaique");
  expect(conta.saldo).toBe(1000);
});

test("Deve retornar a conta pelo nome", () => {
  const conta = bancoService.getAccountByName("Kaique");
  
  expect(conta.nome).toBe("Kaique");
});

test("Deve listar todas as contas criadas", () => {
  const contas = bancoService.listAccounts();

  expect(contas.length).toBe(1);
  expect(contas).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ nome: "Kaique" }),
    ])
    
  );

});

test("Deve verificar se nome vazio", () => {
  const teste = bancoService.createAccount("");
  expect(teste).toBe('nome é obrigatório'); 
});

test("Deve verificar se saldoInicial é abaixo de 0", () => {
  const teste = bancoService.createAccount("Rodrigo", -10);
  expect(teste).toBe('saldo inicial não pode ser negativo'); 
});

test("Deve verificar se o nome é admin", () => {
  const teste = bancoService.createAccount("admin");
  expect(teste).toBe('nome de usuário não pode ser admin'); 
});

test("Deve verificar se a idade é menor que 18", () => {
  const teste = bancoService.createAccount("Rodrigo", 17, 17);
  expect(teste).toBe('idade mínima é 18 anos'); 
});


 