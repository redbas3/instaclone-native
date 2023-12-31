import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import React from "react";
import Profile from "../../screens/Profile";
import Photo from "../../screens/Photo";
import Feed from "../../screens/Feed";
import Search from "../../screens/Search";
import Notifications from "../../screens/Notifications";
import Me from "../../screens/Me";
import Likes from "../../screens/Likes";
import Comments from "../../screens/Comments";

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerBackTitleVisible: false,
        headerTintColor: "white",
        headerStyle: {
          shadowColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "black",
        },
      }}
    >
      {screenName === "Feed" && (
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 100,
                  maxHeight: 50,
                }}
                resizeMode="contain"
                source={require("../../assets/logo.png")}
              />
            ),
          }}
        />
      )}

      {screenName === "Search" && (
        <Stack.Screen name="Search" component={Search} />
      )}
      {screenName === "Notifications" && (
        <Stack.Screen name="Notifications" component={Notifications} />
      )}
      {screenName === "Me" && <Stack.Screen name="Me" component={Me} />}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}
