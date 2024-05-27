// Selecionando o container onde os cards serão exibidos
const cardContainer = document.getElementById("cardContainer");

// Fazendo uma solicitação para o JSON Server para obter os dados dos livros
fetch(
  "https://0e59fb4e-d166-40c1-aafb-27250da2dee0-00-22s2zabeytv6x.worf.replit.dev/livros",
)
  .then((response) => response.json())
  .then((data) => {
    // Iterando sobre os dados dos livros e criando os cards
    data.forEach((item) => {
      const card = `
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
            <div class="card-body">
              <h5 class="card-title">${item.titulo}</h5>
              <p class="card-text">Autor: ${item.autor}</p>
              <p class="card-text">Descrição: ${item.descricao}</p>
              <p class="card-text">Detalhe Adicional: ${item.detalhe_adicional}</p>
            </div>
          </div>
        </div>
      `;
      cardContainer.innerHTML += card;
    });
  })
  .catch((error) => {
    console.error("Erro ao obter os dados dos livros:", error);
  });
