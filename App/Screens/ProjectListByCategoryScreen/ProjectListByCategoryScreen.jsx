import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalApi from "../../Utils/GlobalApi";
import ProjectListItem from "./ProjectListItem";
import Colors from "../../Utils/Colors";

export default function ProjectListByCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();

  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    console.log("Category", param.category);
    param && getProjectListByCategory();
  }, [param]);

  const getProjectListByCategory = () => {
    GlobalApi.getProjectListByCategory(param.category).then((resp) => {
      setProjectList(resp.projectsLists);
    });
  };
  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "Montserrat-Medium" }}>
          {param?.category}
        </Text>
      </TouchableOpacity>
      {projectList?.length > 0 ? (
        <FlatList
          data={projectList}
          style={{ marginTop: 15 }}
          renderItem={({ item, index }) => <ProjectListItem project={item} />}
        />
      ) : (
        <Text
          style={{
            fontFamily: "Montserrat-Medium",
            fontSize: 20,
            textAlign: "center",
            marginTop: 20,
            color: Colors.BLACK,
          }}
        >
          Не має проектів
        </Text>
      )}
    </View>
  );
}
