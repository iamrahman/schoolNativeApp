import React from "react";
import { Text } from "react-native";
import { View } from "native-base";
const AttandanceBar = () => {
  return (
    <View>
        <Text style={{color: '#fff'}}>Attandance</Text>
      <View
        style={{
          height: 20,
          width: 330,
          marginTop: 10,
          borderRadius: 5,
          backgroundColor: "#D9D9D9",
          elevation: 10,
        }}
      >
        <View style={{ height: 20, width: 297, backgroundColor: "#11B238", borderRadius: 5 }}>
          <Text style={{ textAlign: "center", color: "white" }}>90%</Text>
        </View>
      </View>
    </View>
  );
};

export default AttandanceBar;
