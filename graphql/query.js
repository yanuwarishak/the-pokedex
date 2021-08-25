import { gql } from "@apollo/client"

export const GET_POKEMON_BY_NAME = gql`
  query detail($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      sprites {
        front_default
      }
    }
  }
`;

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      nextOffset
      results {
        id
        url
        name
        image
      }
    }
  }
`;


export const GET_POKEMON_OWNED = gql`
  query GetMyPokemons {
    myPokemons @client
  }
`;