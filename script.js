//Seleciona os elementos do HTML
const buscaEntrada = document.getElementById('busca');
const btnBusca = document.getElementById('btnBusca');
const pokemon-info = document.getElementById('pokemon-info');

// Busca o Pokemon pela API - PokeAPI
async function buscaPokemon(pokemon) {
    try {
        //Busca os dados da API pelo nome ou número
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemin.toLowerCAse()}');

        if (response.ok) {
            const data = await response.json();
        }
    }
}