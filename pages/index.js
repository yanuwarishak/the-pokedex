import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

//GraphQL
import { gql } from "@apollo/client";
import client from "../apollo-client";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        url
        name
        image
      }
    }
  }
`;

export default function Home({ pokemons }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Pokedex</title>
        <meta name="description" content="Pokedex - The Pokemon Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>The Pokedex!</a>
        </h1>

        <p className={styles.description}>
          Here's our Pokemons of the Day
        </p>
        <h4 className={styles.viewText}>
          <Link href="/pokemons">Find out all the Pokemons &rarr;</Link>
        </h4>
        <div className={styles.grid}>
          {
            pokemons.map(({ id, name, url, image }) => (
              <Link href={`/pokemon/${name}`}>
                <div key={id} className={styles.card}>
                  <Image src={image} width={150} height={150} />
                  <h2 className={styles.name}>{name}</h2>
                </div>
              </Link>
            ))
          }
        </div>

      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const date = new Date().getDate()
  const month = new Date().getMonth()
  const todayPokemon = date * month * 3
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: { limit: 6, offset: todayPokemon }
  });

  return {
    props: {
      pokemons: data.pokemons.results,
    },
  };
}


