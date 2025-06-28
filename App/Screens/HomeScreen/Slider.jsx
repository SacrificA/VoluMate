import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import { Linking } from "react-native";

export default function Slider() {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getSlider();
  }, []);
  const getSlider = () => {
    GlobalApi.getSlider().then((resp) => {
      setSlider(resp?.sliders);
    });
  };

  return (
    <View>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => {
              if (index === 0) {
                Linking.openURL("https://ab3.army/");
              } else if (index === 1) {
                Linking.openURL("http://surl.li/tjgop");
              }
            }}
          >
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderImage}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    marginBottom: 5,
  },
  sliderImage: {
    width: 330,
    height: 160,
    marginLeft: 8,
    borderRadius: 20,
    objectFit: "contain",
    marginBottom: 10,
  },
});
