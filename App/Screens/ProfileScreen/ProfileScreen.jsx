import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useUser, useSession } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const { user } = useUser();
  const navigation = useNavigation();
  const { session } = useSession();
  const handleSignOut = () => {
    session.end();
  };
  const onMessageBtnClick = () => {
    Linking.openURL(
      "mailto:" +
        "vladislav.ggh@gmail.com" +
        "?subject=Відгуки та побажання задля покращення роботи застосунку&body=Добрий день,"
    );
  };
  const profileMenu = [
    {
      id: 1,
      name: "Головна",
      icon: "home",
      screen: "Home",
    },
    {
      id: 2,
      name: "Проекти",
      icon: "volunteer-activism",
      screen: "Projects",
    },
    {
      id: 3,
      name: "Зворотній зв'язок",
      icon: "mail",
      action: onMessageBtnClick,
    },
    {
      id: 4,
      name: "Вихід",
      icon: "logout",
      action: handleSignOut,
    },
  ];

  return (
    <View>
      <View
        style={{
          padding: 20,
          paddingTop: 20,
          backgroundColor: Colors.PRIMARY,
        }}
      >
        <Text style={{ fontSize: 23, fontFamily: "Montserrat-Bold" }}>
          Профіль
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={{ uri: user.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          <Text
            style={{
              fontSize: 20,
              marginTop: 8,
              fontFamily: "Montserrat-Medium",
              color: Colors.WHITE,
            }}
          >
            {user.fullName}
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 40 }}>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                marginBottom: 50,
                paddingHorizontal: 15,
              }}
              onPress={() => {
                if (item.screen) {
                  navigation.navigate(item.screen);
                } else if (item.action) {
                  item.action();
                }
              }}
            >
              <MaterialIcons
                name={item.icon}
                size={35}
                color={Colors.PRIMARY}
              />
              <Text
                style={{
                  fontFamily: "Montserrat-Medium",
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
