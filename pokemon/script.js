const URL = "https://pokeapi.co/api/v2/";
const poke = document.getElementById("poke");

// Lista de IDs ou nomes de Pokémon para buscar
const pokemonIds = [25, 1, 4, 7, 8, 9, 10, 11, 12, 14, 13, 115,1,3,4]; 

async function callApi() {
    try {
        for (let id of pokemonIds) {
            // Faz a requisição para cada Pokémon
            const resp = await fetch(`${URL}pokemon/${id}`);
            const data = await resp.json();

            // Cria uma div separada para cada Pokémon
            const divPokemon = document.createElement('div');
            divPokemon.classList.add('pokemon'); // Adiciona uma classe (facilita no CSS
            
            //Apenas criação de elementos que facilitarão o front
            const firstDiv = document.createElement('div');
            firstDiv.classList.add('firstDivIn');
            const secondDiv = document.createElement('div');
            secondDiv.classList.add('secondDivIn');
            const secondDivTitulo = document.createElement('div');
            secondDivTitulo.classList.add('sdTitulo');
            const secondDivAtt = document.createElement('div');
            secondDivAtt.classList.add('sdAtt');
            


            // Título com o nome do Pokémon
            const titulo = document.createElement('h3');
            titulo.innerText = `${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`;
            const img = document.createElement('img');
            img.setAttribute("src", data.sprites.front_default);
            img.classList.add('imgPoke');
            // Lista de características
            const lista = document.createElement('ul');

            const caracteristicas = {
                Altura: data.height,
                Peso: data.weight,
                Tipos: data.types.map(typeInfo => typeInfo.type.name).join(', '),
                Habilidades: data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', '),
                // Movimentos: data.moves.slice(0, 5).map(moveInfo => moveInfo.move.name).join(', ')
            };

            for (let key in caracteristicas) {
                const li = document.createElement('li');
                li.innerText = `${key}: ${caracteristicas[key]}`;
                lista.appendChild(li);
            }

            // Adiciona o título e a lista de características à div do Pokémon
            divPokemon.appendChild(firstDiv);
            divPokemon.appendChild(secondDiv);
            secondDiv.appendChild(secondDivTitulo);
            secondDivTitulo.appendChild(titulo);
            secondDiv.appendChild(secondDivAtt);
            secondDivAtt.appendChild(lista);
            firstDiv.appendChild(img);

            // Adiciona a div ao container principal
            poke.appendChild(divPokemon);
        }
    } catch (error) {
        console.error("Erro, caiu no catch!", error);
    }
}

callApi();
