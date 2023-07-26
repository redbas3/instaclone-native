import React from "react";
import Feed from "../screens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";
import Search from "../screens/Search";
import { View } from "react-native-web";
import Camera from "../screens/Camera";
import TabIcon from "../components/nav/TabIcon";

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
              <TabIcon focused={focused} iconName={"home"} color={color} />
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
              <TabIcon focused={focused} iconName={"search"} color={color} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ focused, color }) => {
            return (
              <TabIcon focused={focused} iconName={"camera"} color={color} />
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
              <TabIcon focused={focused} iconName={"heart"} color={color} />
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
              <TabIcon focused={focused} iconName={"person"} color={color} />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
}
