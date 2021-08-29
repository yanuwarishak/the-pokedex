import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

//GraphQL
import client from "../apollo-client";
import { GET_POKEMONS } from '../graphql/query';

export default function Home({ pokemons }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Pokedex</title>
        <meta name="description" content="Pokedex - The Pokemon Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>The Pokedex!</a>
        </h1>

        <p className={styles.description}>
          Here's our Pokemons of the Day
        </p>
        <div className={styles.grid}>
          {
            pokemons.map(({ id, name, url, image }) => (
              <Link key={id} href={`/pokemon/${name}`}>
                <div className={styles.card}>
                  <Image src={image} width={150} height={150} />
                  <h2 className={styles.name}>{name}</h2>
                </div>
              </Link>
            ))
          }
        </div>
        <h4 className={styles.viewText}>
          <Link href="/pokemons">Find out all the Pokemons &rarr;</Link>
        </h4>

      </div>
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


