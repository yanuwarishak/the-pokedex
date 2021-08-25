import { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist";
import { resolvers, typeDefs } from "../graphql/resolvers"
import { GET_POKEMON_OWNED } from "../graphql/query";

import '../styles/globals.css'
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {

  const [client, setClient] = useState(new ApolloClient({
    uri: "https://graphql-pokeapi.graphcdn.app/",
    cache: new InMemoryCache(),
    typeDefs,
    resolvers
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
                merge(existing = [], incoming) {
                  return [...existing, ...incoming]
                }
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
                read(results) { return results },
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
          typeDefs,
          resolvers
        }),
      );
    }

    init().catch(console.error);
  }, []);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
