import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {
  HomeContainer,
  MainContainer,
  PageHeadline,
  SiteHighlight,
  PageDescription,
  PokemonsContainer,
  PokemonItem,
  PokemonName,
  FindText,
} from "../styles/Home.styles";

//GraphQL
import client from "../apollo-client";
import { GET_POKEMONS } from "../graphql/query";

export default function Home({ pokemons }) {
  return (
    <HomeContainer>
      <Head>
        <title>The Pokedex</title>
        <meta name="description" content="Pokedex - The Pokemon Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <PageHeadline>
          Welcome to <SiteHighlight>The Pokedex!</SiteHighlight>
        </PageHeadline>

        <PageDescription>Here's our Pokemons of the Day</PageDescription>
        <PokemonsContainer>
          {pokemons.map(({ id, name, image }) => (
            <Link key={id} href={`/pokemon/${name}`}>
              <PokemonItem>
                <Image src={image} width={150} height={150} />
                <PokemonName>{name}</PokemonName>
              </PokemonItem>
            </Link>
          ))}
        </PokemonsContainer>
        <FindText>
          <Link href="/pokemons">Find out all the Pokemons &rarr;</Link>
        </FindText>
      </MainContainer>
    </HomeContainer>
  );
}

export async function getServerSideProps() {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const todayPokemon = date * month * 3;
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: { limit: 6, offset: todayPokemon },
  });

  return {
    props: {
      pokemons: data.pokemons.results,
    },
  };
}
