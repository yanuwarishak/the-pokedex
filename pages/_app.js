import { ApolloProvider } from "@apollo/client";

import useApolloClient from "../useApolloClient";
// import { useApollo } from "../graphql/apolloClient";

import { globalStyles } from "../styles/Global.styles";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  const client = useApolloClient();
  // const client = useApollo(pageProps);

  return (
    <ApolloProvider client={client}>
      {globalStyles}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
