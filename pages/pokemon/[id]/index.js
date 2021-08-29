import { useState } from "react";
//GraphQL
import client from "../../../apollo-client";
import { GET_POKEMON_BY_NAME } from "../../../graphql/query";

import NicknameForm from "../../../components/nickname-form/NicknameForm";
import Link from "next/link";

import {
  Name,
  DetailContainer,
  Sprites,
  SizeContainer,
  FlexContainer,
  TypesContainer,
  PokemonType,
  TypeName,
  SizeLabel,
  Value,
  InfoContainer,
  TabContainer,
  TabItem,
  MovesContainer,
  MovesItem,
  CatchButton,
  UndiscoveredContainer,
  RedirectLink
} from "../../../styles/Detail.styles";

const pokemon = ({ pokemon }) => {
  const [open, setOpen] = useState(false)
  const [caught, setCaught] = useState(false)
  const [activeTab, setActiveTab] = useState("physical")

  function handleChance() {
    const randomizer = Math.floor(Math.random() * 10)
    if (randomizer >= 5) { setCaught(true); setOpen(true) } else { setCaught(false); setOpen(true) }
  }

  const { name, sprites, weight, height, moves, types } = pokemon;

  return (
    <DetailContainer>
      {open ? <NicknameForm caught={caught} setOpen={setOpen} pokemon={pokemon} /> : null}
      {pokemon.name ? (
        <>
          <Name>{name}</Name>
          <TypesContainer>
            {types.map(({ type }) => (<PokemonType key={type.name} type={type.name}><TypeName>{type.name}</TypeName></PokemonType>))}
          </TypesContainer>
          <Sprites src={sprites.front_default} width={250} height={250} type={types[0].type.name} />
          <CatchButton onClick={() => handleChance()}>Catch Pokemon</CatchButton>
          <InfoContainer>
            <TabContainer>
              <TabItem onClick={() => setActiveTab("physical")} active={activeTab === "physical"}>Physical</TabItem>
              <TabItem onClick={() => setActiveTab("moves")} active={activeTab === "moves"}>Moves</TabItem>
            </TabContainer>
            {activeTab === "physical" && (
              <SizeContainer>
                <FlexContainer>
                  <SizeLabel>Height</SizeLabel>
                  <Value>{height / 10} m</Value>
                </FlexContainer>
                <FlexContainer>
                  <SizeLabel>Weight</SizeLabel>
                  <Value>{weight / 10} kg</Value>
                </FlexContainer>
              </SizeContainer>
            )}
            {activeTab === "moves" && (
              <MovesContainer>
                {moves.map(({ move }) => <MovesItem key={move.name}>{move.name}</MovesItem>)}
              </MovesContainer>
            )}
          </InfoContainer>
        </>
      ) : (
        <UndiscoveredContainer>
          <Name>Uh oh, we haven't discovered this Pokemon yet.</Name>
          <h3>
            You can discover them in The Pokedex
            <RedirectLink>
              <Link href="/pokemons">
                &larr; Go to Pokedex
              </Link>
            </RedirectLink>
          </h3>
        </UndiscoveredContainer>
      )}
    </DetailContainer>
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
