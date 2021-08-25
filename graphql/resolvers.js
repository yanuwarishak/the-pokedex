import { gql } from "@apollo/client";

import { addPokemon, releasePokemon } from "./pokemon.utils";

import { GET_POKEMON_OWNED } from "./query";

export const typeDefs = gql`
  extend type Pokemon {
    nickname: String
    image: String
  }

  extend type Mutation {
    AddPokemonToList(pokemon: Pokemon!): [Pokemon]!
    RemovePokemonFromList(nickname: String!): [Pokemon]!
  }
`;

export const resolvers = {
  Mutation: {
    addPokemonToList: (_root, { pokemon }, { cache }) => {
      const { myPokemonsList } = cache.readQuery({
        query: GET_POKEMON_OWNED,
      });
      const newMyPokemonsList = addPokemon(myPokemonsList, pokemon);

      cache.writeQuery({
        query: GET_POKEMON_OWNED,
        data: { myPokemonsList: newMyPokemonsList },
      });

      return newMyPokemonsList;
    },

    removePokemonFromList: (_root, { nickname }, { cache }) => {
      const { myPokemonsList } = cache.readQuery({
        query: GET_POKEMON_OWNED,
      });
      const newPokemonsList = releasePokemon(myPokemonsList, nickname);

      cache.writeQuery({
        query: GET_POKEMON_OWNED,
        data: { myPokemonsList: newPokemonsList },
      });

      return newPokemonsList;
    },
  },
};
