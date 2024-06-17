import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function ProjectListItemSmall({ project }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.push("project-detail", {
          project: project,
        });
      }}
    >
      <Image source={{ uri: project?.image[0].url }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{project?.name}</Text>
        <Text style={styles.contactPersonText}>{project?.contactPerson}</Text>
        <Text style={styles.categoryNameText}>{project?.category.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 7,
    display: "flex",
    gap: 3,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
  },
  contactPersonText: {
    fontSize: 13,
    fontFamily: "Montserrat-Light",
  },
  categoryNameText: {
    fontSize: 10,
    fontFamily: "Montserrat-Light",
    padding: 3,
    color: Colors.PRIMARY,
    backgroundColor: Colors.UNDERPRIMARY,
    borderRadius: 99,
    alignSelf: "flex-start",
    paddingHorizontal: 7,
  },
});
