import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProjectDetailsScreen from "../Screens/ProjectDetailsScreen/ProjectDetailsScreen";
import ProjectsScreen from "../Screens/ProjectsScreen/ProjectsScreen";

const Stack = createStackNavigator();
export default function ProjectNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="project" component={ProjectsScreen} />
      <Stack.Screen name="project-detail" component={ProjectDetailsScreen} />
    </Stack.Navigator>
  );
}
