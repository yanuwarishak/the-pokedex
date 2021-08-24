import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";

// await persistCache({
//     cache,
//     storage: new LocalStorageWrapper(window.localStorage),
// });

const client = new ApolloClient({
    uri: "https://graphql-pokeapi.graphcdn.app/",
    cache: new InMemoryCache(),
});

export default client;