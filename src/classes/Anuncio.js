class Anuncio {
  constructor(autor, descricao, tipoDeMateriaDescartavel) {
    this.autor = autor;
    this.descricao = descricao;
    this.produto = tipoDeMateriaDescartavel; // Corrigindo para usar o tipoDeMateriaDescartavel
    this.disponivel = true;
    this.likes = 0;
  }

  darLike() {
    this.likes++;
  }

  obterLikes() {
    return this.likes;
  }
}

module.exports = { Anuncio };