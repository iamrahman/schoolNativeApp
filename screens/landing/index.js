import React from "react";

import { View, Text, Button, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { ScreenName } from "../../constants";

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>Delhi Public School</Text>
        <Text style={styles.subTitle}>School Management System</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(ScreenName.AUTH)}>
        <View style={styles.btn}>
          <Text style={{color: '#fff', fontSize: 17}}>Start</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
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
    fontFamily: 'serif',
    fontWeight: 'bold'
  },
  subTitle: {
    textAlign: "center",
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#150E80'
  },
  logo: {
    width: 100,
    height: 130
  },
  btn: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 10,
    padding: 10,
    margin: 20,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#1C5EBD'
  },
});

export default LandingScreen;
