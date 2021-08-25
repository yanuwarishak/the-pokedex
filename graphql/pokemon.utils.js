export const addPokemon = (myPokemonsList, pokemonToAdd) => {
  return [...myPokemonsList, { ...pokemonToAdd, __typename: "Pokemon" }];
};

export const releasePokemon = (myPokemonsList, pokemonToRelease) => {
  const newPokemonList = myPokemonsList.filter(
    (pokemon) => pokemon.nickname !== pokemonToRelease
  );
  return newPokemonList;
};
