import React from "react";
import { Text } from "react-native";
import { View } from "native-base";
const AttandanceBar = () => {
  return (
    <View>
        <Text>Attandance</Text>
      <View
        style={{
          height: 20,
          width: 330,
          marginTop: 10,
          backgroundColor: "#D9D9D9",
        }}
      >
        <View style={{ height: 20, width: 297, backgroundColor: "green" }}>
          <Text style={{ textAlign: "center", color: "white" }}>90%</Text>
        </View>
      </View>
    </View>
  );
};

export default AttandanceBar;
