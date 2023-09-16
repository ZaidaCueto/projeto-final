class Pessoa {
  constructor(nome, email, whatsapp) {
    this.nome = nome;
    this.email = email;
    this.whatsapp = whatsapp;
  }

  toString() {
    return `Nome: ${this.nome}, Email: ${this.email}, WhatsApp: ${this.whatsapp}`;
  }
}
module.exports = { Pessoa };