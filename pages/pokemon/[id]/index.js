import { useState } from "react";

import NicknameForm from "../../../components/nickname-form/NicknameForm";
import Link from "next/link";
import Image from "next/image";

//GraphQL
import client from "../../../apollo-client";
import { GET_POKEMON_BY_NAME } from "../../../graphql/query";

import styles from "../../../styles/Detail.module.css";

const pokemon = ({ pokemon }) => {
  const [open, setOpen] = useState(false)
  const [caught, setCaught] = useState(false)

  function handleChance() {
    const randomizer = Math.floor(Math.random() * 10)
    if (randomizer >= 5) { setCaught(true); setOpen(true) } else { setCaught(false); setOpen(true) }
  }

  return (
    <div className={styles.container}>
      {open ? <NicknameForm caught={caught} setOpen={setOpen} pokemon={pokemon} /> : null}
      {pokemon.name ? (
        <>
          <h1>{pokemon.name.toUpperCase()}</h1>
          <Image className={styles.sprites} src={pokemon.sprites.front_default} width={200} height={200} />
          <span><h3>Height: {pokemon.height / 10} m</h3><h3>Weight: {pokemon.weight / 10} kg</h3></span>
          <button onClick={() => handleChance()}>Catch Pokemon</button>
        </>
      ) : (
        <>
          <h1>Uh oh, we haven't discovered this Pokemon yet.</h1>
          <h3>
            You can discover them{" "}
            <Link href="/pokemons">
              <span className={styles.link}>here</span>
            </Link>
          </h3>
        </>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data, error } = await client.query({
    query: GET_POKEMON_BY_NAME,
    variables: { name: context.params.id },
  });

  return {
    props: {
      pokemon: data.pokemon,
    },
  };
}

export default pokemon;
