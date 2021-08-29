import { useState } from "react";
import { useQuery, useApolloClient } from "@apollo/client";
import { GET_POKEMON_OWNED } from "../../graphql/query";
import Image from "next/image";

import {
  ModalContainer,
  ModalOverlay,
  CardContainer,
  CardHeadline,
  CloseButton,
  SubmitButton,
  Form,
  FormLabel,
  TextInput,
} from "./NicknameForm.styles";

const NicknameForm = ({ setOpen, pokemon, caught }) => {
  const [nickname, setNickname] = useState("");
  const [invalid, setInvalid] = useState(false);
  const { loading, data } = useQuery(GET_POKEMON_OWNED);
  const client = useApolloClient();

  if (loading) return null;

  const newPokemon = {
    __typename: "MyPokemon",
    id: nickname.toLowerCase(),
    name: pokemon.name,
    image: pokemon.sprites.front_default,
    nickname: nickname.toLowerCase(),
  };

  const formHandler = (e) => {
    e.preventDefault();
    const existingPokemons = data.myPokemons;
    const validNickname = existingPokemons.filter(
      (pokemon) => pokemon.nickname === nickname.toLowerCase()
    );

    if (validNickname.length === 0 && nickname.length > 0) {
      client.writeQuery({
        query: GET_POKEMON_OWNED,
        data: {
          myPokemons: [...existingPokemons, newPokemon],
        },
      });
      setOpen(false);
    } else {
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, 1500);
    }
  };

  return caught ? (
    <ModalContainer>
      <ModalOverlay onClick={() => setOpen(false)} />
      <CardContainer>
        <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
        <CardHeadline>{pokemon.name} Caught!</CardHeadline>
        <Image src={pokemon.sprites.front_default} width={200} height={200} />
        <Form onSubmit={formHandler}>
          <FormLabel invalid={invalid}>
            {invalid
              ? "Nickname invalid or already exists"
              : "Give it a nickname"}
          </FormLabel>
          <TextInput
            type="text"
            value={nickname}
            invalid={invalid}
            onChange={(e) => setNickname(e.target.value)}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </CardContainer>
    </ModalContainer>
  ) : (
    <ModalContainer>
      <ModalOverlay onClick={() => setOpen(false)} />
      <CardContainer>
        <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
        <CardHeadline>It ran away!</CardHeadline>
        <Image src={pokemon.sprites.front_default} width={200} height={200} />
      </CardContainer>
    </ModalContainer>
  );
};

export default NicknameForm;
