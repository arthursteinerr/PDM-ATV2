import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { PetStack } from "./PetStack";
import PetCatView from "../view/PetCatView";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#084f18aa",
        tabBarInactiveTintColor: "#555",
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === "Petshop" ? "storefront" : "cat";
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Petshop" component={PetStack} />
      <Tab.Screen name="Gatos" component={PetCatView} />
    </Tab.Navigator>
  );
}