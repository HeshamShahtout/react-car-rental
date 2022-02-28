import {ApolloClient, InMemoryCache} from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: `http://137.184.183.69:9000/graphql` as any,
  cache: new InMemoryCache(),
})