import React from "react";
import Feed from "../screens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";
import Search from "../screens/Search";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "rgba(255, 255, 255, 0.2)",
        },
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
        },
        headerTitleStyle: {
          color: "white",
        },
        tabBarActiveTintColor: "white",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 600,
          marginTop: -5,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons name={"home"} color={color} size={focused ? 24 : 20} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={"search"}
                color={color}
                size={focused ? 24 : 20}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons name={"heart"} color={color} size={focused ? 24 : 20} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={"person"}
                color={color}
                size={focused ? 24 : 20}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
}
