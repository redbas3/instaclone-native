import React from "react";
import Feed from "../screens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Feed" component={Feed} />
    </Tabs.Navigator>
  );
}
