import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import ProjectPhotos from "./ProjectPhotos";
import ProjectAbout from "./ProjectAbout";
import HelpModal from "./HelpModal";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function ProjectDetailsScreen() {
  const param = useRoute().params;
  const [project, setProject] = useState(param.project);
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, []);
  const onMessageBtnClick = () => {
    Linking.openURL(
      "mailto:" +
        "vladislav.ggh@gmail.com" +
        "?subject=Запитання щодо проекту&body=Добрий день,"
    );
  };
  return (
    project && (
      <StripeProvider publishableKey="pk_test_51PABK604MubCHuYuYx4aXQvAGo15cC23feDiLNXS5jQsaofjuy2xlUxm0hFvCrKGNoJL5pJLE1UgVyYbXhCh9B1200yWow59rP">
        <View>
          <ScrollView style={{ height: "92%" }}>
            <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
            <Image
              source={{ uri: project?.image[0]?.url }}
              style={{ width: "100%", height: 225 }}
            />
            <View style={styles.infoContainer}>
              <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 22 }}>
                {project?.name}
              </Text>
              <View style={styles.subContainer}>
                <Text
                  style={{
                    fontFamily: "Montserrat-Medium",
                    color: Colors.PRIMARY,
                    fontSize: 20,
                  }}
                >
                  {project?.contactPerson}
                </Text>
                <Text
                  style={{
                    color: Colors.PRIMARY,
                    backgroundColor: Colors.UNDERPRIMARY,
                    padding: 5,
                    borderRadius: 6,
                    fontSize: 16,
                  }}
                >
                  {project?.category.name}
                </Text>
              </View>

              <Text style={{ fontSize: 17, fontFamily: "Montserrat-Medium" }}>
                <Entypo name="location" size={25} color={Colors.PRIMARY} />
                {project?.adress}
              </Text>

              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: Colors.GRAY,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              ></View>

              <ProjectAbout project={project} />

              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: Colors.GRAY,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              ></View>

              <ProjectPhotos project={project} />
            </View>
          </ScrollView>
          <View
            style={{ display: "flex", flexDirection: "row", margin: 3, gap: 8 }}
          >
            <TouchableOpacity
              style={styles.messageButton1}
              onPress={() => onMessageBtnClick()}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Montserrat-Medium",
                  fontSize: 16,
                  color: Colors.PRIMARY,
                }}
              >
                Повідомлення
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.messageButton2}
              onPress={() => setShowModal(true)}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Montserrat-Medium",
                  fontSize: 16,
                  color: Colors.WHITE,
                }}
              >
                Приєднатися
              </Text>
            </TouchableOpacity>
          </View>

          <Modal animationType="slide" visible={showModal}>
            <HelpModal hideModal={() => setShowModal(false)} />
          </Modal>
        </View>
      </StripeProvider>
    )
  );
}
const styles = StyleSheet.create({
  backButtonContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    flex: 1,
  },
  messageButton1: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
  messageButton2: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
});
