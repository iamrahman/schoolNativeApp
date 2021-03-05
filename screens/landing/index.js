import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, Image } from "react-native";
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
      <View style={{ padding: 30 }}>
        <Button
          title="Start"
          style={styles.btn}
          color="#1A5C11"
          onPress={() => navigation.navigate(ScreenName.AUTH)}
        />
      </View>
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
    width: 80,
    height: 100
  }
});

export default LandingScreen;
