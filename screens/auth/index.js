import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
const AuthScreen = () => {
  const [value, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.view}>
        <Text style={styles.title}>Delhi Public School</Text>
        <Text style={styles.subTitle}>Account Login</Text>
      </View>
      <View style={styles.view}>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder="Enter Username"
        />
      </View>
      <View style={styles.view}>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder="Enter Password"
        />
      </View>
      <View style={styles.btn}>
        <Button
          title=" Login "
          color="#1A5C11"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 16,
    fontSize: 18,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  subTitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#150E80",
  },
  inputText: {
    height: 40,
    minWidth: 250,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 10,
  },
  logo: {
    width: 80,
    height: 100
  }
});

export default AuthScreen;
