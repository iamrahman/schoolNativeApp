import React from "react";
import { Text, View } from "react-native";

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
          backgroundColor: "#FFFFFF",
          elevation: 10,
        }}
      >
        <View style={{ height: 20, width: 274, backgroundColor: "#11B238", borderRadius: 5 }}>
          <Text style={{ textAlign: "center", color: "white" }}>83.34%</Text>
        </View>
      </View>
    </View>
  );
};

export default AttandanceBar;
