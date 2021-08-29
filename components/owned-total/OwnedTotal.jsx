import { useQuery } from "@apollo/client";
import { GET_POKEMON_OWNED } from "../../graphql/query";

const OwnedTotal = ({ name }) => {
  const { data, loading } = useQuery(GET_POKEMON_OWNED);
  if (loading) return null;
  const myPokemons = data.myPokemons;
  const totalOwned = myPokemons.filter((pokemon) => pokemon.name === name);
  return (
    <div>
      <p>
        You own {totalOwned.length} <span>{name}</span>
      </p>
    </div>
  );
};

export default OwnedTotal;
