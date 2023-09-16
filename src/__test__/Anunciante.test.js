const { Anunciante } = require('../classes/Anunciante');

describe('Anunciante', () => {
  test('deveria criar um anúncio', () => {
    const anunciante = new Anunciante('za', 'za@gmail.com', '100000000', 'Plástico');
    const descricao = 'Anúncio de teste';
    const anuncio = anunciante.criarAnuncio(descricao);

    expect(anuncio.descricao).toBe(descricao);
    expect(anunciante.anuncios).toContain(anuncio);
  });
  test('deveria criar uma instancia da classe Anunciante ', () => {
    const anunciante = new Anunciante('za', 'za@gmail.com', '100000000', 'Plástico');

    expect(anunciante.nome).toBe('za');
    expect(anunciante.email).toBe('za@gmail.com');
    expect(anunciante.whatsapp).toBe('100000000');
    expect(anunciante.tipoDeMateriaDescartavel).toBe('Plástico');
    expect(anunciante.anuncios).toHaveLength(0);
  });
  test('deveria começar com zero anúncios  ', () => {
    const anunciante = new Anunciante('Nome', 'email@example.com', '1234567890', 'Plástico');

    expect(anunciante.anuncios).toHaveLength(0);
  });

});


