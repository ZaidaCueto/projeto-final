const { Pessoa } = require('../classes/Pessoa');

describe('Pessoa', () => {
  test('deveria criar uma instância de Pessoa ', () => {
    const pessoa = new Pessoa('Za', 'za@gmail.com', '1234567890');

    expect(pessoa.nome).toBe('Za');
    expect(pessoa.email).toBe('za@gmail.com');
    expect(pessoa.whatsapp).toBe('1234567890');
  });

});
