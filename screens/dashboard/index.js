import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AttandanceBar from "../../components/attandanceBar";
import AnnouncmentBox from "../../components/announcement";
import { ScreenName } from "../../constants";
const DashboardScreen = ({ navigation }) => {
  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          "Logout session?",
          "Are you sure to end the session and leave the screen?",
          [
            { text: "Don't leave", style: "cancel", onPress: () => {} },
            {
              text: "Logout",
              style: "destructive",
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation]
  );

  return (
    <SafeAreaView style={{ backgroundColor: "#1C5EBD" }}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <View>
            <Image
              style={styles.profilImage}
              source={{
                uri:
                  "https://i.pinimg.com/originals/48/35/b5/4835b5f9c52fd733eb26fb2c2b47bdc7.jpg",
              }}
            />
          </View>
          <View>
            <Text style={styles.name}>Anjali Sharma</Text>
          </View>
          <View>
            <Text style={{ color: "#fff" }}>Class IX - A</Text>
          </View>
          <AttandanceBar />
          <AnnouncmentBox />
        </View>
        <View style={styles.menuView}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.ATTANDANCE)}
            >
              <View style={styles.menuBox}>
                <Text style={styles.text}>Attandance</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.EXAMS)}
            >
              <View style={styles.menuBox}>
                <Text style={styles.text}>Exam</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.menuBox}>
              <Text style={styles.text}>Results</Text>
            </View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.TEACHERS)}
            >
              <View style={styles.menuBox}>
                <Text style={styles.text}>Teachers</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.menuBox}>
              <Text style={styles.text}>Assignment</Text>
            </View>
            <View style={styles.menuBox}>
              <Text style={styles.text}>Holidays</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },
  menuView: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  menuBox: {
    backgroundColor: "orangered",
    height: 50,
    margin: 10,
    minWidth: 100,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    padding: 15,
  },
  name: {
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  profilImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
    backgroundColor: "#070E96",
    marginTop: 30,
  },
});

export default DashboardScreen;
