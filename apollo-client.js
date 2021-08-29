// This is client configuration for server-side rendering
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    ssrMode: true,
    uri: "https://graphql-pokeapi.graphcdn.app/",
    cache: new InMemoryCache(),
});

export default client;