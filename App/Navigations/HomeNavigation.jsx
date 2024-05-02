import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ProjectListByCategoryScreen from "../Screens/ProjectListByCategoryScreen/ProjectListByCategoryScreen";
import ProjectDetailsScreen from "../Screens/ProjectDetailsScreen/ProjectDetailsScreen";

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="project-list"
        component={ProjectListByCategoryScreen}
      />
      <Stack.Screen name="project-detail" component={ProjectDetailsScreen} />
    </Stack.Navigator>
  );
}
