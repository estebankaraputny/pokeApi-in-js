// Hacer la llamada a la pokeAPI, y obtener la información de los primeros 30 
// pokemones. Luego, renderizamos por pokemon en el DOM una card con la siguiente información:
// 1) Sprite del pokemon
// 2) ID del pokemon en la pokedex
// 3) Nombre del pokemon

// Después, agregar una "searchbar" que busque por nombre o por id al pokemon
//  deseado. En caso de no conseguir resultados, devolver un cartel avisando al
//   usuario de que no se encontraron resultados.


const URL__API = "https://pokeapi.co/api/v2/pokemon/";

const pokemonesApi = async () => {
  const arrayPokemones = [];
  for (let i = 1; i < 31; i++) {
    const URL = URL__API + i;
    const pokeFetch = await fetch(URL);
    const pokemon = await pokeFetch.json();
    arrayPokemones.push(pokemon);
  }
  pokemonesFull(arrayPokemones);
};
pokemonesApi();

const contentCards = document.getElementById("contentCards");
let div = ``;

const pokemonesFull = (arrayPokemones) => {
  const pokemones = arrayPokemones.map((pokemon) => {
    console.log("ID: ", pokemon.id);
    console.log("Name: ", pokemon.name);
    console.log("sprites", pokemon.sprites.front_default);

    return (div += `
            <div class="pokeCard">
                <div class="contentImage">
                    <img src="${pokemon.sprites.front_default}" alt="" class="imageOfPokemon"></img>
                </div>
                <h2 class="namePokemon">${pokemon.name}</h2>
                <p class="idPokemon">ID: ${pokemon.id}</p>
            </div>
        `);
  });
  contentCards.innerHTML = div;
};

// const searchPokemones = document.getElementById("searchPokemones")


// searchPokemones.addEventListener("keyup", (event) =>{

// })