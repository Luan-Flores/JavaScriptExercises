const URL = "https://pokeapi.co/api/v2/";
const poke = document.getElementById("poke");

// Lista de IDs ou nomes de Pokémon para buscar
const pokemonIds = [25, 1, 4, 7]; // Pikachu, Bulbasaur, Charmander, Squirtle

async function callApi() {
    try {
        for (let id of pokemonIds) {
            // Faz a requisição para cada Pokémon
            const resp = await fetch(`${URL}pokemon/${id}`);
            const data = await resp.json();

            // Cria uma div separada para cada Pokémon
            const divPokemon = document.createElement('div');
            divPokemon.classList.add('pokemon'); // Adiciona uma classe (opcional)

            // Título com o nome do Pokémon
            const titulo = document.createElement('h3');
            titulo.innerText = `Nome: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`;

            // Lista de características
            const lista = document.createElement('ul');

            const caracteristicas = {
                Altura: data.height,
                Peso: data.weight,
                Tipos: data.types.map(typeInfo => typeInfo.type.name).join(', '),
                Habilidades: data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', '),
                Movimentos: data.moves.slice(0, 5).map(moveInfo => moveInfo.move.name).join(', ')
            };

            for (let key in caracteristicas) {
                const li = document.createElement('li');
                li.innerText = `${key}: ${caracteristicas[key]}`;
                lista.appendChild(li);
            }

            // Adiciona o título e a lista de características à div do Pokémon
            divPokemon.appendChild(titulo);
            divPokemon.appendChild(lista);

            // Adiciona a div ao container principal
            poke.appendChild(divPokemon);
        }
    } catch (error) {
        console.error("Erro, caiu no catch!", error);
    }
}

callApi();
