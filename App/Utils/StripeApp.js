import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "./Colors";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import Heading from "../Components/Heading";

const API_URL = "http://localhost:5500";

const StripeApp = () => {
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();
  const [note, setNote] = useState();

  const handlePayPress = async () => {
    if (!cardDetails?.complete || !email) {
      Alert.alert("Будь ласка заповніть дані та електронну адресу");
      return;
    }
    const billingDetails = {
      email: email,
    };
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();
      if (error) {
        console.log("Неможливо провести оплату");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDetails,
        });
        if (error) {
          Alert.alert(`Помилка оплати ${error.message}`);
        } else if (paymentIntent) {
          Alert.alert("Оплата успішна");
          console.log("Оплата успішна", paymentIntent);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { clientSecret, error } = await response.json();
    return { clientSecret, error };
  };

  return (
    <View>
      <View>
        <TextInput
          autoCapitalize="none"
          placeholder="E-mail"
          placeholderTextColor={Colors.GRAY}
          keyboardType="email-address"
          keyboardAppearance="default"
          onChange={(value) => setEmail(value.nativeEvent)}
          style={styles.input}
        />
        <CardField
          postalCodeEnabled={true}
          placeholders={{ number: "6969 6969 6969 6969" }}
          cardStyle={styles.card}
          style={styles.cardContainer}
          onChange={(cardDetails) => {
            setCardDetails(cardDetails);
          }}
        />
      </View>
      <View style={{ paddingTop: 20 }}>
        <Heading text={"Додайте коментар"} />
        <TextInput
          placeholder="Коментар"
          placeholderTextColor={Colors.GRAY}
          numberOfLines={4}
          multiline={true}
          style={styles.noteTextArea}
          onChange={(text) => setNote(text)}
        />
      </View>
      <TouchableOpacity
        onPress={handlePayPress}
        disabled={loading}
        style={styles.confirmButton}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Montserrat-Medium",
            fontSize: 18,
            color: Colors.WHITE,
          }}
        >
          Допомогти
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
    padding: 20,
    borderRadius: 99,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    marginTop: 20,
  },
  input: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 8,
    fontSize: 15,
    height: 50,
    padding: 10,
    marginTop: 20,
    fontFamily: "Montserrat-Bold",
  },
  card: {
    backgroundColor: Colors.LIGHT_GRAY,
  },
  cardContainer: { height: 50, marginVertical: 30 },
});
