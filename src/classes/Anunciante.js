const { Pessoa } = require('./Pessoa');
const { Anuncio } = require('./Anuncio');

class Anunciante extends Pessoa {
  constructor(nome, email, whatsapp, tipoDeMateriaDescartavel) {
    super(nome, email, whatsapp);
    this.tipoDeMateriaDescartavel = tipoDeMateriaDescartavel;
    this.anuncios = [];
  }

  criarAnuncio(descricao) {
    const anuncio = new Anuncio(this, descricao, this.tipoDeMateriaDescartavel);
    this.anuncios.push(anuncio);
    return anuncio;
  }
}
module.exports = { Anunciante };