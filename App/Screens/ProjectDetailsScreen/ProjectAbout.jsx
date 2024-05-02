import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

export default function ProjectAbout({ project }) {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    project && (
      <View>
        <Heading text={"Про проект"} />

        <Text
          style={{
            fontFamily: "Montserrat-Medium",
            color: Colors.GRAY,
            fontSize: 16,
            marginTop: 10,
            lineHeight: 28,
          }}
          numberOfLines={isReadMore ? 20 : 4}
        >
          {project?.about}
        </Text>
        <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontFamily: "Montserrat-Medium",
            }}
          >
            {isReadMore ? "Згорнути" : "Більше про проект"}
          </Text>
        </TouchableOpacity>
      </View>
    )
  );
}
