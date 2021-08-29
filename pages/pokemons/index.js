import ClientOnly from "../../components/client-only/ClientOnly";
import PokemonsList from "../../components/pokemons-list/PokemonsList";

import { PageHeadline } from "../../styles/Home.styles";

const pokemonsList = () => {

    return (
        <>
            <PageHeadline>Pokedex: The Pokemon Database</PageHeadline>
            <ClientOnly>
                <PokemonsList />
            </ClientOnly>
        </>
    )
}

export default pokemonsList;