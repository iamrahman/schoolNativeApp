import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScreenName } from "../../constants";
import Font from "react-native-vector-icons/FontAwesome";

const AuthScreen = ({ navigation }) => {
  const [formData, onChangeForm] = useState({
    username: "",
    password: "",
  });

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>
      <View style={styles.view}>
        <Text style={styles.title}>Delhi Public School</Text>
        <Text style={styles.subTitle}>Account Login</Text>
      </View>
      <View style={styles.view}>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) =>
            onChangeForm({
              ...formData,
              username: text,
            })
          }
          value={formData.username}
          placeholder="Enter Username"
        />
      </View>
      <View style={styles.view}>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) =>
            onChangeForm({
              ...formData,
              password: text,
            })
          }
          value={formData.password}
          placeholder="Enter Password"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenName.DASHBOARD)}
      >
        <View style={styles.btn}>
          <Text style={{ color: "#fff", fontSize: 17 }}>
            <Font name="sign-in" style={{ color: "#fff" }} size={17} /> Login
          </Text>
        </View>
      </TouchableOpacity>
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
    height: 55,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 10,
    marginTop: 20,
    minWidth: 300,
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    borderRadius: 10,
    padding: 10,
    margin: 45,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#1C5EBD",
  },
  logo: {
    width: 80,
    height: 100,
  },
});

export default AuthScreen;
