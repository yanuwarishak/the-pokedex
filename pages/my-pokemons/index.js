import { useApolloClient } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_OWNED } from "../../graphql/query";
import Image from "next/image";

const myPokemons = () => {
    // const { data, loading, error } = useQuery(GET_POKEMON_OWNED)
    const client = useApolloClient();
    // const myPokemon = client.readQuery({ query: POKEMON_OWNED })
    // console.log(myPokemon);
    // const myPokemons = client.readQuery({ query: GET_POKEMON_OWNED })

    const { data, loading } = useQuery(GET_POKEMON_OWNED)
    if (loading) return null;
    const myPokemons = data.myPokemons;

    return (
        <div>
            <h1>This is the Pokemons you have caught</h1>
            <div className="pokemon-caught">
                {myPokemons.map((pokemon) => (
                    <div key={pokemon.id}>
                        <Image src={pokemon.image} height={200} width={200} />
                        <h1>{pokemon.name}</h1>
                        <h2>{pokemon.nickname}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default myPokemons;