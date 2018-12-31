const axios = require("./node_modules/axios");

class Pokemon {
  constructor(idPokemon) {
    this.idPokemon = idPokemon;
  }

  getPokemon(idPokemon) {
    console.log(`Estas buscando a ${this.idPokemon}`);
    axios
      .get("https://pokeapi.co/api/v2/pokemon/7")
      .then(response => {
        console.log(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

var pokemon = new Pokemon(1);
pokemon.getPokemon();
