// import { useRouter } from "next/router"

//GraphQL
import { gql } from "@apollo/client";
import client from "../../../apollo-client";

const GET_POKEMON_BY_NAME = gql`
  query detail($name: String!) {
    pokemon(name: $name) {
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

const pokemon = ({ pokemon }) => {
    console.log(pokemon)
    return <div> This is {pokemon.name}</div>
}

export async function getServerSideProps(context) {
    const { data } = await client.query({
        query: GET_POKEMON_BY_NAME,
        variables: { name: context.params.id }
    });

    return {
        props: {
            pokemon: data.pokemon
        }
    }
}

export default pokemon;