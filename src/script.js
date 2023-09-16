const { Anunciante } = require('./classes/Anunciante');
const { Anuncio } = require('./classes/Anuncio');

document.addEventListener("DOMContentLoaded", function () {
  const produtorForm = document.getElementById("produtor-form");
  const anunciosLista = document.getElementById("anuncios-lista");


  function criarNovoAnuncio() {
    const nome = document.getElementById("produtor-nome").value;
    const whatsapp = document.getElementById("produtor-whatsapp").value;
    const tipoDeMateriaDescartavel = document.getElementById("produtor-tipo-lixo").value;
    const descricao = document.getElementById("produtor-descricao").value;
  
    const autor = new Anunciante(nome, whatsapp, tipoDeMateriaDescartavel);
   
    let anunciosDisponiveis = JSON.parse(localStorage.getItem('anunciosDisponiveis')) || [];
  
    anunciosDisponiveis.push({
      autor: {
        nome: autor.nome,
        email: autor.email,
        whatsapp: autor.whatsapp,
        tipoDeMateriaDescartavel: tipoDeMateriaDescartavel,
      },
      descricao: descricao,
    });
  

    localStorage.setItem('anunciosDisponiveis', JSON.stringify(anunciosDisponiveis));
  
  
    anunciosLista.innerHTML = "";
  
    anunciosDisponiveis.forEach((anuncioData) => {
      const autor = new Anunciante(
        anuncioData.autor.nome,
        anuncioData.autor.whatsapp,
        anuncioData.autor.tipoDeMateriaDescartavel
      );
      const anuncio = new Anuncio(autor, anuncioData.descricao, anuncioData.autor.tipoDeMateriaDescartavel);
      const anuncioElement = criarAnuncioElement(anuncio);
      anunciosLista.appendChild(anuncioElement);
    });
  
    document.getElementById("produtor-nome").value = " ";
    document.getElementById("produtor-whatsapp").value = " ";
    document.getElementById("produtor-tipo-lixo").value = " Plástico";
    document.getElementById("produtor-descricao").value = " ";
  }
  
  function criarAnuncioElement(anuncioItem) {
    const li = document.createElement("li");
    li.className = "anuncio-item"; 
    const divInfo = document.createElement("div");
    divInfo.className = "anuncio-info"; 
 
    const autorElement = document.createElement("span");
    autorElement.textContent = `Autor: ${anuncioItem.autor.nome}`;
    const produtoElement = document.createElement("span");
    produtoElement.textContent = `Produto: ${anuncioItem.produto}`;
    const descricaoElement = document.createElement("span");
    descricaoElement.textContent = `Descrição: ${anuncioItem.descricao}`;
    const disponivelElement = document.createElement("span");
    disponivelElement.textContent = `Disponível: ${anuncioItem.disponivel}`;

    divInfo.appendChild(autorElement);
    divInfo.appendChild(produtoElement);
    divInfo.appendChild(descricaoElement);
    divInfo.appendChild(disponivelElement);
  
    const whatsappButton = document.createElement("button");
    whatsappButton.textContent = "Contatar via WhatsApp";
    whatsappButton.className = "whatsapp-button"; 
    whatsappButton.addEventListener("click", () => {
      window.open(`https://api.whatsapp.com/send?phone=${ anuncioItem.autor.whatsapp}`);
    });
  
    const likeButton = document.createElement("button");
    likeButton.textContent = "Curtir";
    likeButton.className = "like-button"; 
    likeButton.addEventListener("click", () => {
      anuncioItem.darLike();
      atualizarContadorLikes(likeCounter, anuncioItem.obterLikes());
    });
  
    const likeCounter = document.createElement("span");
    likeCounter.className = "likes";
    likeCounter.textContent = anuncioItem.obterLikes();
  
    li.appendChild(divInfo);
    li.appendChild(whatsappButton);
    li.appendChild(likeButton);
    li.appendChild(likeCounter);
  
    return li;
  }

  function atualizarContadorLikes(element, likes) {
    element.textContent = likes;
  }

  function listarDadosLocalStorage() {
    const anunciosDisponiveisJSON = localStorage.getItem('anunciosDisponiveis');
    if (anunciosDisponiveisJSON) {
      const anunciosDoLocalStorage = JSON.parse(anunciosDisponiveisJSON);
      anunciosDoLocalStorage.forEach((anuncioData) => {
        const autor = new Anunciante(
          anuncioData.autor.nome,
          anuncioData.autor.whatsapp,
          anuncioData.autor.tipoDeMateriaDescartavel
        );
        const anuncio = new Anuncio(autor, anuncioData.descricao, anuncioData.autor.tipoDeMateriaDescartavel); // Passando o tipo de lixo
        const anuncioElement = criarAnuncioElement(anuncio);
        anunciosLista.appendChild(anuncioElement);
      });
    }
  }

  listarDadosLocalStorage();

  produtorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    criarNovoAnuncio();
  });
});
