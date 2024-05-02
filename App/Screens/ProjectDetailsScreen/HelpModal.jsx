import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import { StripeProvider } from "@stripe/stripe-react-native";
import StripeApp from "../../Utils/StripeApp";

export default function HelpModal({ hideModal }) {
  const [note, setNote] = useState();

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ padding: 20 }}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            padding: 0,
            paddingTop: 30,
          }}
          onPress={() => hideModal()}
        >
          <Ionicons name="arrow-back-outline" size={30} color="black" />
          <Text style={{ fontSize: 25, fontFamily: "Montserrat-Medium" }}>
            Фінансова допомога
          </Text>
        </TouchableOpacity>
        <StripeProvider publishableKey="pk_test_51PABK604MubCHuYuYx4aXQvAGo15cC23feDiLNXS5jQsaofjuy2xlUxm0hFvCrKGNoJL5pJLE1UgVyYbXhCh9B1200yWow59rP">
          <StripeApp />
        </StripeProvider>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  noteTextArea: {
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: "top",
    padding: 20,
    fontSize: 16,
    fontFamily: "Montserrat-Medium",
    borderColor: Colors.PRIMARY,
  },
  confirmButton: {
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    padding: 13,
    borderRadius: 15,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    elevation: 2,
  },
});
