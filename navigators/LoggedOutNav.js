import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcoms";
import Login from "../screens/Login";
import CreateAccount from "../screens/CreateAccount";

const Stack = createStackNavigator();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      presentation="card"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: "black",
        headerMode: "float",
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: "Welcome baby",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
}
