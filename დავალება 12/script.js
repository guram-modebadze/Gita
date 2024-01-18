const poke_container = document.getElementById("poke-container");

const pokemon_count = 24;

const myPokemons = [];

const colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const main_types = Object.keys(colors);

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  //   --------------------------------------------------------------

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

  const favs = document.getElementById("my-poke");

  const clickAdd = () => {
    if (myPokemons.length < 5 && !myPokemons.includes(pokemon.id)) {
      myPokemons.push(pokemon.id);

      favs.innerHTML = `
            <div class='my'>${myPokemons[0]}</div>
            <div class='my'>${myPokemons[1]}</div>
            <div class='my'>${myPokemons[2]}</div>
            <div class='my'>${myPokemons[3]}</div>
            <div class='my'>${myPokemons[4]}</div>
            `;
    } else {
      alert("Too Many Pokemons");
    }
  };

  const clickRemove = () => {
    for (let i = 0; i < myPokemons.length; i++) {
      if (myPokemons[i] === pokemon.id) {
        let spliced = myPokemons.splice(i, 1);
        favs.innerHTML = `
            <div class='my'>${myPokemons[0]}</div>
            <div class='my'>${myPokemons[1]}</div>
            <div class='my'>${myPokemons[2]}</div>
            <div class='my'>${myPokemons[3]}</div>
            <div class='my'>${myPokemons[4]}</div>
          
            `;
      }
    }
  };

  const add = () => {
    if (myPokemons.includes(pokemon.id)) {
      clickRemove();
      localStorage.setItem("myPokemons", myPokemons);
    } else {
      clickAdd();
      localStorage.setItem("myPokemons", myPokemons);
    }
  };

  const button = document.getElementById("button");

  pokemonEl.addEventListener("click", add);
  button.addEventListener("click", () => {
    window.location.href = "./myPokes.html";
  });

  pokemonEl.innerHTML = pokemonInnerHtml;
  poke_container?.appendChild(pokemonEl);
  return pokemonEl;
};

fetchPokemon();
