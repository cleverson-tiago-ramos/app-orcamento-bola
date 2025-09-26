import "react-native-gesture-handler"; // Importante para o Stack Navigator
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainTabNavigator } from "./src/presentation/navigation/MainTabNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MainTabNavigator />
    </NavigationContainer>
  );
}
