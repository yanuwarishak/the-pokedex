import { useCallback, useRef } from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../../graphql/query";

import Image from "next/image";
import OwnedTotal from "../owned-total/OwnedTotal";

import {
  ListContainer,
  PokemonCard,
  PokemonName,
  DetailButton,
} from "./PokemonsList.styles";

const PokemonsList = () => {
  const { data, loading, fetchMore } = useQuery(GET_POKEMONS, {
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

  if (loading) return null;
  const pokemons = data.pokemons.results;

  return (
    <ListContainer>
      {pokemons.map(({ id, name, image }, index) => {
        if (pokemons.length === index + 1) {
          return (
            <PokemonCard key={id} ref={lastPokemonEl}>
              <Image src={image} width={140} height={140} />
              <PokemonName>{name}</PokemonName>
              <OwnedTotal name={name} />
              <Link href={`/pokemon/${name}`}>
                <DetailButton>Detail</DetailButton>
              </Link>
            </PokemonCard>
          );
        } else {
          return (
            <PokemonCard key={id}>
              <Image src={image} width={140} height={140} />
              <PokemonName>{name}</PokemonName>
              <OwnedTotal name={name} />
              <Link href={`/pokemon/${name}`}>
                <DetailButton>Detail</DetailButton>
              </Link>
            </PokemonCard>
          );
        }
      })}
    </ListContainer>
  );
};

export default PokemonsList;
