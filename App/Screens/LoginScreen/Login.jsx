import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{ fontSize: 27, color: Colors.WHITE, textAlign: "center" }}
        >
          <Text style={{ fontFamily: "Montserrat-Bold" }}>
            {" "}
            Моніторинг проектів, зв'язок із організаціями
          </Text>
          {""}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 20,
            fontFamily: "Montserrat-Medium",
          }}
        >
          Єдина платформа для організації благодійності VoluMate - все в одному
          місці!
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: Colors.PRIMARY,
              fontFamily: "Montserrat-Medium",
            }}
          >
            Авторизація
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: Colors.PRIMARY,
              fontFamily: "Montserrat-Medium",
              alignItems: "center",
            }}
          >
            <AntDesign name="infocirlceo" size={12} color="black" /> Про проект
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: 220,
    height: 250,
    marginTop: 20,
    borderWidth: 2,
    borderColor: Colors.BLACK,
    borderRadius: 20,
  },
  subContainer: {
    width: "112%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  button: {
    padding: 18,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 85,
  },
  button1: {
    padding: 18,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 50,
  },
});
