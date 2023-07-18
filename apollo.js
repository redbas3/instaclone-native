import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);

export const logUserIn = async (token) => {
  // await AsyncStorage.setItem("token", JSON.stringify(token));
  await AsyncStorage.multiSet([
    ["token", JSON.stringify(token)],
    ["loggedIn", JSON.stringify("yes")],
  ]);

  isLoggedInVar(true);
};

const client = new ApolloClient({
  uri: "https://256c-240d-1e-2fe-ba00-f5e7-5548-d7ae-2646.ngrok-free.app/graphql",
  cache: new InMemoryCache(),
});

export default client;