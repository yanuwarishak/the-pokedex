import { useState, useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CachePersistor, LocalStorageWrapper } from "apollo3-cache-persist";
import { offsetLimitPagination } from "@apollo/client/utilities";

import '../styles/globals.css'
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {

  const [client, setClient] = useState(new ApolloClient({
    uri: "https://graphql-pokeapi.graphcdn.app/",
    cache: new InMemoryCache(),
  }));
  const [persistor, setPersistor] = useState();

  useEffect(() => {
    async function init() {
      const cache = new InMemoryCache();

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

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
