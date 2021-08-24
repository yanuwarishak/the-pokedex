import ClientOnly from "../../components/client-only/ClientOnly";
import PokemonsList from "../../components/pokemons-list/PokemonsList";

import styles from "../../styles/Home.module.css"

const pokemonsList = () => {
    return (
        <div>
            <h1 className={styles.pageheader}>Pokedex: The Pokemon Database</h1>
            <ClientOnly>
                <PokemonsList />
            </ClientOnly>
        </div>
    )
}

export default pokemonsList;