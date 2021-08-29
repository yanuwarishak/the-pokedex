import { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist";

function useApolloClient() {
    const [client, setClient] = useState(new ApolloClient({
        uri: "https://graphql-pokeapi.graphcdn.app/",
        cache: new InMemoryCache(),
    }));
    const [persistor, setPersistor] = useState();

    useEffect(() => {
        async function init() {
            const cache = new InMemoryCache({
                typePolicies: {
                    Query: {
                        fields: {
                            pokemons: {
                                keyArgs: false,
                            },
                            myPokemons: {
                                read(myPokemons = []) {
                                    return myPokemons
                                },
                            }
                        }
                    },
                    PokemonList: {
                        fields: {
                            results: {
                                keyArgs: false,
                                merge(existing = [], incoming) {
                                    return [...existing, ...incoming]
                                },
                                read(results = []) { return results },
                            }
                        }
                    },
                }
            });

            let newPersistor = new CachePersistor({
                cache,
                storage: new LocalStorageWrapper(window.localStorage),
                debug: true,
                trigger: 'write',
            });

            await newPersistor.restore();
            setPersistor(newPersistor);
            setClient(
                new ApolloClient({
                    uri: "https://graphql-pokeapi.graphcdn.app/",
                    cache,
                }),
            );
        }

        init().catch(console.error);
    }, []);

    return client;
}

export default useApolloClient;