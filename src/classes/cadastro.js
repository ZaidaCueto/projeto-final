const { Pessoa } = require('./Pessoa');

class Cadastro extends Pessoa {
  constructor(nome, email, senha) {
    super(nome, email, null);
    this.senha = senha;
  }

  toString() {
    return `Nome: ${this.nome}, Email: ${this.email}`;
  }
}

const cadastro = new Cadastro("za", "za@gmaul.com", "123");
console.log(cadastro.toString());

module.exports = { Cadastro };
