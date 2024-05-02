import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { useRoute, useNavigation } from "@react-navigation/native";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import ProjectScreenItem from "../ProjectsScreen/ProjectScreenItem";

export default function ProjectsScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    getProjectList();
  }, []);

  const getProjectList = () => {
    GlobalApi.getProjectList().then((resp) => {
      setProjectList(resp.projectsLists);
    });
  };

  return (
    <ScrollView>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          padding: 10,
          paddingTop: 25,
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "Montserrat-Medium" }}>
          Проекти
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 10 }}>
        <FlatList
          data={projectList}
          renderItem={({ item, index }) => (
            <View style={{ marginTop: -13, padding: 13 }}>
              <ProjectScreenItem project={item} />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
