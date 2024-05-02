import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProjectListItem({ project }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.push("project-detail", {
          project: project,
        })
      }
    >
      <Image source={{ uri: project?.image[0]?.url }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text
          style={{
            fontFamily: "Montserrat-Medium",
            color: Colors.GRAY,
            fontSize: 15,
          }}
        >
          {project.contactPerson}
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat-Bold",
            fontSize: 13,
          }}
        >
          {project.name}
        </Text>
        <Text
          style={{
            fontFamily: "Montserrat-Medium",
            color: Colors.GRAY,
            fontSize: 10,
          }}
        >
          <Entypo name="location" size={26} color={Colors.PRIMARY} />
          {project.adress}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContainer: {
    display: "flex",
    gap: 7,
  },
  image: {
    width: 100,
    height: 100,
  },
});
