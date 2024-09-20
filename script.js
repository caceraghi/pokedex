//Seleciona os elementos do HTML
const buscaEntrada = document.getElementById('busca');
const btnBusca = document.getElementById('btnBusca');
const pokemonInfo = document.getElementById('pokemon-info');

// Busca o Pokemon pela API - PokeAPI
async function buscaPokemon(pokemon) {
    try {
        //Busca os dados da API pelo nome ou número
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemin.toLowerCAse()}');

        if (response.ok) {
            const data = await response.json();
            displayPokemon(data);
        }else {
            pokemonInfo.innerHTML = '<p>Pokemon não Encontrado. Tente Novamente!<p>';
        }
    } catch (error){
        pokemonInfo.innerHTML = '<p>Ocorreu um erro ao buscar o Pakemon. Verifique sua conexão.<p>';
    }
}

//Função que vai exibir as informações do Pokemon
function displayPokemon(data) {
    pokemonInfo.innerHTM = 'pokemonInfo.innerHTML = <img src="${data.sprites.front_default}" alt="${data.name}"><h2>${data.name} (#${data.id})</h2><p>Altura: ${(data.height / 10).toFixed(1)}m</p><p>Peso: ${(data.weight / 10).toFixed(1)}kg</p><p>Tipo: ${data.types.map(type => type.type.name).join(', ')}</p>';
}

// Adicionando evento de clique no botão de busca
btnBusca.addEventListener('click', () => {
    const pokemon = buscaEntrada.value.trim();
    
    if (pokemon) {
        buscaPokemon(pokemon);
    } else {
        pokemonInfo.innerHTML = `<p>Por favor, insira um nome ou número de Pokémon.</p>`;
    }
  });
  