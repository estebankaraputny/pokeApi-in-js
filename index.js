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

const searchPokemones = document.getElementById("searchPokemones")


searchPokemones.addEventListener("keyup", (event) =>{
  // console.log(event.target.value)
  const cardPokemones = document.querySelectorAll(".pokeCard")
  let pokemonesHidden = [];

  if (event.target.matches("#searchPokemones")){
    cardPokemones.forEach(pokemon => {
      pokemon.textContent.toLowerCase().includes(event.target.value.toLowerCase())
      ? pokemon.classList.remove("hidden")
      : pokemon.classList.add("hidden")

      if(pokemon.classList.contains("hidden")){
              pokemonesHidden.push(pokemon)
      }
    })
  }

  const menssageErr = document.getElementById("menssageError")
  let menssage = ``;
  

  if(pokemonesHidden.length === cardPokemones.length){
        menssage += `
        <div class="pokeCard  cardError">
                <div class="contentImage">
                    <img src="https://i.gifer.com/fetch/w300-preview/02/0220ce6d1515887ce5feedc6ccec9845.gif" alt="" class="imageOfPokemon"></img>
                </div>
                <h2 class="namePokemon">¡Ups! Pokemon no encontrado.</h2>
                <p class="idPokemon">Vuelve a intentarlo.</p>
            </div>
        <img src="">
        <h4></h4>
        `
      }

      menssageErr.innerHTML = menssage; //Mensaje que solo se mostrara si no se encuentra lo ingresado en el input
})

