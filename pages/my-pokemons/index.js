import ClientOnly from "../../components/client-only/ClientOnly";
import MyPokemons from "../../components/my-pokemons/MyPokemons";

const myPokemons = () => {
    return (
        <>
            <h1>This is the Pokemons you have caught</h1>
            <ClientOnly>
                <MyPokemons />
            </ClientOnly>

        </>
    )
}

export default myPokemons;