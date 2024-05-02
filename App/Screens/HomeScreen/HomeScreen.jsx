import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import ProjectList from "./ProjectList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{ padding: 15 }}>
        <Slider />
        <Categories />
        <ProjectList />
      </View>
    </SafeAreaView>
  );
}
