import { useState } from "react";

import { useQuery, useApolloClient } from "@apollo/client";
import { GET_POKEMON_OWNED } from "../../graphql/query";

import styles from "./Nickname.module.css";

const NicknameForm = ({ setOpen, pokemon }) => {
  const [nickname, setNickname] = useState("");
  const client = useApolloClient();

  //   const myPokemon = client.readQuery({ query: POKEMON_OWNED });
  const myPokemon = []

  const newPokemon = {
    __typename: "MyPokemon",
    id: pokemon.id,
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    nickname: nickname.toLowerCase(),
  };

  const formHandler = (e) => {
    e.preventDefault();
    client.writeQuery({
      query: GET_POKEMON_OWNED,
      data: {
        myPokemons: [...myPokemon, newPokemon],
      },
    });
    setOpen(false);
  };

  return open ? (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3>Give Nickname</h3>
        <form onSubmit={formHandler}>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <button onClick={() => setOpen(false)}>Close Modal </button>
    </div>
  ) : null;
};

export default NicknameForm;
