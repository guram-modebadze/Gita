const myPokes = localStorage.getItem("myPokemons");

const mainMy = document.getElementById("main-my");

const pokemon_count2 = 5;

mainMy.innerHTML = ` 
<div class='my'>${myPokes[0]}</div>
<div class='my'>${myPokes[2]}</div>
<div class='my'>${myPokes[4]}</div>
<div class='my'>${myPokes[6]}</div>
<div class='my'>${myPokes[8]}</div>`;

const randomPokes = document.getElementById("random");

const fetchPokemon2 = async () => {
  for (let i = 1; i <= pokemon_count2; i++) {
    await getPokemon2(Math.floor(Math.random() * 100));
  }
};

// const randomNum = Math.floor(Math.random() * 100);
// console.log(randomNum);

const getPokemon2 = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createPokemonCard2(data);
};

const createPokemonCard2 = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const id = pokemon.id.toString().padStart(3, "0");
  const name = pokemon.name;

  const poke_type = pokemon.types.map((type) => type.type.name);

  const type = main_types.find((type) => poke_type.indexOf(type) > -1);

  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHtml = `
    <span class="number">#${id}</span>
            <div class="img_container">
                <img src="${pokemon?.sprites?.other?.dream_world?.front_default}" >
            </div>
            <div class="info">
               
                <h3 class="name">${name}</h3>
                <small class="type">type : ${type}</small>
            </div>
        
    `;
  pokemonEl.innerHTML = pokemonInnerHtml;
  randomPokes?.appendChild(pokemonEl);
};

fetchPokemon2();
