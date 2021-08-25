import { useState, useEffect, useCallback, useRef } from "react";

import Link from "next/link";

import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../graphql/query";
import Image from "next/image";

import styles from "./Card.module.css";

const PokemonsList = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_POKEMONS, {
    variables: { limit: 20, offset: 0 },
  });

  let nextOffset = 0;
  if (data) {
    nextOffset = data.pokemons.nextOffset;
  }

  // Infinite scroll config
  const observer = useRef();
  const lastPokemonEl = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && pokemons.length <= 1160) {
            fetchMore({
              variables: { limit: 20, offset: nextOffset },
            });
          }
        },
        { threshold: 1 }
      );
      if (node) observer.current.observe(node);
    },
    [loading, nextOffset]
  );

  // useEffect(() => {
  //   if (!loading && data) {
  //     setPokemons((prevList) => [...prevList, ...data.pokemons.results]);
  //   } else {
  //     setPokemons((prevList) => [...prevList]);
  //   }
  // }, [offset, data]);

  if (loading) return null;
  const pokemons = data.pokemons.results;

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
                You own 0 <span className={styles.name}>{name}</span>
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
