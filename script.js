
async function carregarPersonagens() {
  const container = document.getElementById('container-cards');

  try {
    const resposta = await fetch('https://rickandmortyapi.com/api/character');
    const dados = await resposta.json();

    container.innerHTML = '';

    dados.results.forEach(personagem => {
      const card = document.createElement('div');
      card.classList.add('card');

      const imagem = document.createElement('img');
      imagem.src = personagem.image;
      imagem.alt = personagem.name;

      const nome = document.createElement('h2');
      nome.textContent = personagem.name;

      const status = document.createElement('p');
      status.textContent = `Status: ${personagem.status}`;

      const especie = document.createElement('p');
      especie.textContent = `Espécie: ${personagem.species}`;

      card.appendChild(imagem);
      card.appendChild(nome);
      card.appendChild(status);
      card.appendChild(especie);

      container.appendChild(card);
    });
  } catch (erro) {
    console.error('Erro ao carregar personagens:', erro);
    container.innerHTML = '<p>Não foi possível carregar os personagens.</p>';
  }
}

document.addEventListener('DOMContentLoaded', carregarPersonagens);
