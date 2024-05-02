import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

export default function Heading({ text, isViewAll = false }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      <TouchableOpacity>
        {isViewAll && (
          <Text
            style={{ color: Colors.PRIMARY, fontFamily: "Montserrat-Bold" }}
          >
            Всі
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 17,
    fontFamily: "Montserrat-Medium",
    marginBottom: 5,
  },
});
