const { Cadastro } = require('../classes/cadastro');

describe('Cadastro', () => {
  // Teste para verificar se a instância de Cadastro é criada corretamente
  test('deve criar uma instância de Cadastro com os atributos corretos', () => {
    const cadastro = new Cadastro('zaida', 'zcn@gmail.com', '123');

    expect(cadastro.nome).toBe('zaida');
    expect(cadastro.email).toBe('zcn@gmail.com');
    expect(cadastro.senha).toBe('123');
  });

  // Teste para verificar se o método toString() retorna a string correta
  test('toString() deve retornar uma string no formato correto', () => {
    const cadastro = new Cadastro('zaida', 'zcn@gmail.com', '123');
    const resultado = cadastro.toString();

    expect(resultado).toBe('Nome: zaida, Email: zcn@gmail.com');
  });

  // Teste para verificar se a senha está sendo definida corretamente
  test('deve definir a senha corretamente', () => {
    const cadastro = new Cadastro('zaida', 'zcn@gmail.com', '123');

    expect(cadastro.senha).toBe('123');
  });

  // Teste para verificar se a senha é definida como nula quando não fornecida

  // Teste para verificar se toString() retorna uma string quando a senha é nula
  test('toString() deve retornar uma string quando a senha é nula', () => {
    const cadastro = new Cadastro('zaida', 'zcn@gmail.com');
    const resultado = cadastro.toString();

    expect(resultado).toBe('Nome: zaida, Email: zcn@gmail.com');
  });
});
