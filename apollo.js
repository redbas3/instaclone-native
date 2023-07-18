import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: "https://256c-240d-1e-2fe-ba00-f5e7-5548-d7ae-2646.ngrok-free.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
