fetch('http://localhost:3000')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('cardContainer');
    data.forEach(item => {
      const card = `
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
          <div class="card-body">
            <h5 class="card-title">${item.titulo}</h5>
            <p class="card-text">${item.autor}</p>
            <p class="card-text">${item.descricao}</p>
            <p class="card-text">${item.detalhe_adicional}</p>
          </div>
        </div>
      </div>
    `;
      cardContainer.innerHTML += card;
    });
  });