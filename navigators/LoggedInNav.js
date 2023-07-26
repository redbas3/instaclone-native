import React from "react";
import Feed from "../screens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";
import Search from "../screens/Search";
import { View } from "react-native-web";
import Camera from "../screens/Camera";
import TabIcon from "../components/nav/TabIcon";
import Me from "../screens/Me";
import StackNavFactory from "../components/nav/StackNavFactory";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "rgba(255, 255, 255, 0.3)",
        },
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 600,
          marginTop: -5,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="TabFeed"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TabIcon focused={focused} iconName={"home"} color={color} />
            );
          },
        }}
      >
        {() => <StackNavFactory screenName="Feed" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="TabSearch"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TabIcon focused={focused} iconName={"search"} color={color} />
            );
          },
        }}
      >
        {() => <StackNavFactory screenName="Search" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="TabCamera"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TabIcon focused={focused} iconName={"camera"} color={color} />
            );
          },
        }}
      >
        {() => <StackNavFactory screenName="Camera" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="TabNotifications"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TabIcon focused={focused} iconName={"heart"} color={color} />
            );
          },
        }}
      >
        {() => <StackNavFactory screenName="Notifications" />}
      </Tabs.Screen>
      <Tabs.Screen
        name="TabMe"
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TabIcon focused={focused} iconName={"person"} color={color} />
            );
          },
        }}
      >
        {() => <StackNavFactory screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
