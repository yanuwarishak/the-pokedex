import { useState, useEffect, useCallback, useRef } from "react";

import Link from "next/link";

import { useQuery, gql } from "@apollo/client";
import Image from "next/image";

import styles from "../../styles/Card.module.css";
import pokemon from "../../pages/pokemon/[id]";

const GET_POKEMONS_LIST = gql`
  query getPokemonsList($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
      }
    }
  }
`;

const PokemonsList = () => {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);

  const { data, loading, error } = useQuery(GET_POKEMONS_LIST, {
    variables: { limit: 20, offset: offset },
  });

  // Infinite scroll config
  const observer = useRef();
  const lastPokemonEl = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && offset <= 1160) {
            setOffset((prev) => prev + 20);
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    if (!loading && data) {
      setPokemons((prevList) => [...prevList, ...data.pokemons.results]);
    } else {
      setPokemons((prevList) => [...prevList]);
    }
  }, [offset, data]);

  return (
    <div className={styles.container}>
      {pokemons.map(({ id, name, image }, index) => {
        if (pokemons.length === index + 1) {
          return (
            <a key={id} className={styles.items} ref={lastPokemonEl}>
              <Image src={image} width={140} height={140} />
              <h2 className={styles.name}>{name}</h2>
              <p className={styles.catchText}>
                You own 0 <span className={styles.name}>{name}</span>
              </p>
              <Link href={`/pokemon/${name}`}>
                <button className={styles.button}>Detail</button>
              </Link>
            </a>
          );
        } else {
          return (
            <a key={id} className={styles.items}>
              <Image src={image} width={140} height={140} />
              <h2 className={styles.name}>{name}</h2>
              <p className={styles.catchText}>
                You own 0 <span className={styles.name}>{name}!</span>
              </p>
              <Link href={`/pokemon/${name}`}>
                <button className={styles.button}>Detail</button>
              </Link>
            </a>
          );
        }
      })}
      {/* <button onClick={() => setOffset((prev) => prev + 20)}>Fetch more</button> */}
    </div>
  );
};

export default PokemonsList;
