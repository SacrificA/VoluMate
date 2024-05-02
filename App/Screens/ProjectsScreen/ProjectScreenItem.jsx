import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function ProjectScreenItem({ project }) {
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
      <View style={styles.infoContainer}>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "Montserrat-Bold",
            alignSelf: "flex-start",
            flex: 1,
          }}
        >
          {project?.name}{" "}
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Montserrat-Bold",
              padding: 6,
              color: Colors.WHITE,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 15,
              alignSelf: "flex-end",
              paddingHorizontal: 20,
              flex: 1,
            }}
          >
            {project?.category.name}
          </Text>
        </Text>

        <Image source={{ uri: project?.image[0].url }} style={styles.image} />
        <Text style={{ fontSize: 17, fontFamily: "Montserrat-Medium" }}>
          {project?.contactPerson}
        </Text>

        <Text
          style={{
            fontSize: 15,
            borderRadius: 3,
            fontFamily: "Montserrat-Bold",
            padding: 5,
            color: Colors.BLACK,
            backgroundColor:
              project?.progress === "Started"
                ? "green"
                : project?.progress === "inProgress"
                ? "yellow"
                : project?.progress === "Ended"
                ? "red"
                : Colors.PRIMARY,

            alignSelf: "flex-end",
            paddingHorizontal: 10,
          }}
        >
          {project?.progress}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.UNDERPRIMARY,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 8,
    display: "flex",
    gap: 4,
  },
  image: {
    width: 270,
    height: 160,
    borderRadius: 10,
  },
});
