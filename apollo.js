import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  makeVar,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";
import { offsetLimitPagination } from "@apollo/client/utilities";

const TOKEN = "token";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token) => {
  await AsyncStorage.setItem(TOKEN, token);

  tokenVar(token);
  isLoggedInVar(true);
};

export const logUserOut = async () => {
  await AsyncStorage.removeItem(TOKEN);

  isLoggedInVar(false);
  tokenVar("");
};

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar(),
    },
  };
});

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // seeFeed: {
          //   keyArgs: false,
          //   merge(existing = [], incoming = []) {
          //     return [...existing, ...incoming];
          //   },
          // },
          // same
          seeFeed: offsetLimitPagination(),
        },
      },
    },
  }),
});

export default client;
