import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import GlobalApi from "../../Utils/GlobalApi";
import ProjectListItemSmall from "./ProjectListItemSmall";

export default function ProjectList() {
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
    <View style={{ marginTop: 10 }}>
      <Heading text={"Останні проекти"} isViewAll={true} />
      <FlatList
        data={projectList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <ProjectListItemSmall project={item} />
          </View>
        )}
      />
    </View>
  );
}
