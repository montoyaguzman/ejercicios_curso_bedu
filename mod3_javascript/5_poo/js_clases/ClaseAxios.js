class ClaseAxios {
  constructor(idPokemon) {
    this.idPokemon = idPokemon;
  }

  getPokemon(idPokemon) {
    console.log(`Estas buscando a ${this.idPokemon}`);
  }
}

var pokemon = new ClaseAxios(1);
pokemon.getPokemon();
