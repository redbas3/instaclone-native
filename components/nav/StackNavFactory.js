import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../../screens/Profile";
import Photo from "../../screens/Photo";
import Feed from "../../screens/Feed";
import Search from "../../screens/Search";
import Notifications from "../../screens/Notifications";
import Me from "../../screens/Me";

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }) {
  return (
    <Stack.Navigator>
      {screenName === "Feed" && <Stack.Screen name="Feed" component={Feed} />}
      {screenName === "Search" && (
        <Stack.Screen name="Search" component={Search} />
      )}
      {screenName === "Notifications" && (
        <Stack.Screen name="Notifications" component={Notifications} />
      )}
      {screenName === "Me" && <Stack.Screen name="Me" component={Me} />}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}
