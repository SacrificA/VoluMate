import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const { user, isLoading } = useUser();
  const navigation = useNavigation();
  return (
    user && (
      <View style={styles.container}>
        <View style={styles.profileMainContainer}>
          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
              <Text style={styles.greetingsText}>Вітання</Text>
              <Text style={styles.userFullnameText}>{user?.fullName}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Projects")}>
            <MaterialIcons name="volunteer-activism" size={26} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Пошук"
            placeholderTextColor={Colors.GRAY}
            style={styles.texInput}
          />
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="text-box-search-outline"
              style={styles.searchButton}
              size={26}
              color={Colors.WHITE}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    paddingTop: 25,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  greetingsText: {
    color: Colors.WHITE,
    fontFamily: "Montserrat-Medium",
  },
  userFullnameText: {
    color: Colors.WHITE,
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  texInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    width: "85%",
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
  },
  searchBarContainer: {
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 2,
  },
  searchButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 8,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
