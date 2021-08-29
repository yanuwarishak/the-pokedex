import { useApolloClient } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_OWNED } from "../../graphql/query";
import Image from "next/image";
import Link from "next/link";
import {
  ListContainer,
  PokemonCard,
  PokemonName,
  ReleaseButton,
  PokemonNickname,
  NoList,
  CatchText,
  PokeballImage,
  HomeButton,
} from "./MyPokemons.styles";

const MyPokemons = () => {
  const client = useApolloClient();
  const { data, loading } = useQuery(GET_POKEMON_OWNED);
  if (loading) return null;
  const myPokemons = data.myPokemons;

  const releasePokemon = (pokemonToRelease) => {
    const newPokemonList = myPokemons.filter(
      (pokemon) => pokemon.nickname !== pokemonToRelease
    );
    client.writeQuery({
      query: GET_POKEMON_OWNED,
      data: {
        myPokemons: newPokemonList,
      },
    });
  };

  return (
    <>
      {myPokemons.length ? (
        <ListContainer>
          {myPokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id}>
              <Image src={pokemon.image} height={200} width={200} />
              <PokemonName>{pokemon.name}</PokemonName>
              <PokemonNickname>{pokemon.nickname}</PokemonNickname>
              <ReleaseButton onClick={() => releasePokemon(pokemon.nickname)}>
                Release
              </ReleaseButton>
            </PokemonCard>
          ))}
        </ListContainer>
      ) : (
        <NoList>
          <CatchText>It's lonely here...</CatchText>
          <CatchText>Let's catch some Pokemon!</CatchText>
          <PokeballImage />
          <Link href="/pokemons">
            <HomeButton>Open Pokedex</HomeButton>
          </Link>
        </NoList>
      )}
    </>
  );
};

export default MyPokemons;
