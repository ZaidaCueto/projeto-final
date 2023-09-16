const { Anuncio } = require('../classes/Anuncio');

describe('Anuncio', () => {

  test('deveria  criar um anúncio', () => {
    const autor = { nome: 'zai', email: 'zai.com', whatsapp: '10000000' };
    const descricao = 'Descrição do anúncio';
    const tipoDeMateriaDescartavel = 'Plástico';
    const anuncio = new Anuncio(autor, descricao, tipoDeMateriaDescartavel);

    expect(anuncio.autor).toEqual(autor);
    expect(anuncio.descricao).toBe(descricao);
    expect(anuncio.produto).toBe(tipoDeMateriaDescartavel);
    expect(anuncio.disponivel).toBe(true);
    expect(anuncio.likes).toBe(0);
  });

  test('deveria encrementar likes', () => {
    const autor = { nome: 'zai', email: 'zai.com', whatsapp: '10000000' };
    const descricao = 'Descrição do anúncio';
    const tipoDeMateriaDescartavel = 'Plástico';
    const anuncio = new Anuncio(autor, descricao, tipoDeMateriaDescartavel);

    anuncio.darLike();

    expect(anuncio.likes).toBe(1);
  });


  test('deveria obter a contagem de likes', () => {
    const autor = { nome: 'zai', email: 'zai.com', whatsapp: '10000000' };
    const descricao = 'Descrição do anúncio';
    const tipoDeMateriaDescartavel = 'Plástico';
    const anuncio = new Anuncio(autor, descricao, tipoDeMateriaDescartavel);

    const likes = anuncio.obterLikes();

    expect(likes).toBe(0);
  });
});
