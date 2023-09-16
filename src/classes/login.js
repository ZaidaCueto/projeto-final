const {Cadastro} = require('./cadastro');

class Login {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  verificarCredenciais(cadastros) {
    const cadastroCorrespondente = cadastros.find((cadastro) => {
      return cadastro.email === this.email && cadastro.senha === this.senha;
    });

    if (cadastroCorrespondente) {
      console.log("Login bem-sucedido!");
      console.log(cadastroCorrespondente.toString());
    } else {
      console.log("Credenciais inválidas. Por favor, verifique seu email e senha.");
    }
  }
}
module.exports = { Login };



const cadastros = [
  new Cadastro("User1", "za@.com", "123"),
  new Cadastro("User2", "za2@.com", "123"),
];

const login = new Login("za@.com", "123");

login.verificarCredenciais(cadastros);
