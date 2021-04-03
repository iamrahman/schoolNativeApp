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
import { ScreenName, theme } from "../../constants";
import Font from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcon2 from "react-native-vector-icons/MaterialIcons";

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
    <SafeAreaView style={{ backgroundColor: theme.primary }}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <View>
            <Image
              style={styles.profilImage}
              source={{
                uri:
                  "https://static.geekyants.com/image-resize-cache/eyJpZCI6MTA3NSwidCI6ImZpdCIsInciOjIwMCwiaCI6MjAwLCJxIjo5MCwidiI6MX0=.png",
              }}
            />
          </View>
          <View>
            <Text style={styles.name}>Inamur Rahman</Text>
          </View>
          <View>
            <Text style={{ color: "#fff" }}>Class XII - B</Text>
          </View>
          <AttandanceBar />
          {/* <AnnouncmentBox /> */}
        </View>
        <View style={styles.menuView}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.ATTANDANCE)}
              activeOpacity={0.9}
            >
              <View style={styles.menuBox}>
                <MaterialIcon
                  name="calendar-check"
                  style={styles.icon}
                  size={30}
                />
                <Text style={styles.text}>Attandance</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.EXAMS)}
              activeOpacity={0.9}
            >
              <View style={styles.menuBox}>
                <Font name="pencil-square-o" style={styles.icon} size={30} />
                <Text style={styles.text}>Exam</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.TEACHERS)}
              activeOpacity={0.9}
            >
              <View style={styles.menuBox}>
                <MaterialIcon
                  name="account-group"
                  style={styles.icon}
                  size={30}
                />
                <Text style={styles.text}>Teacher</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.RESULTS)}
              activeOpacity={0.9}
            >
              <View style={styles.menuBox}>
                <Font name="bar-chart" style={styles.icon} size={30} />
                <Text style={styles.text}>Result</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.menuBox}>
              <MaterialIcon name="message" style={styles.icon} size={30} />
              <Text style={styles.text}>Messages</Text>
            </View>
            <View style={styles.menuBox}>
              <MaterialIcon name="beach" style={styles.icon} size={30} />
              <Text style={styles.text}>Holidays</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.menuBox}>
              <TouchableOpacity
                onPress={() => navigation.navigate(ScreenName.EVENTS)}
              >
                <MaterialIcon2
                  name="emoji-events"
                  style={styles.icon}
                  size={30}
                />
                <Text style={styles.text}>Events</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuBox}>
              <MaterialIcon2 name="headset-mic" style={styles.icon} size={30} />
              <Text style={styles.text}>Help</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },
  menuView: {
    backgroundColor: theme.primarylight,
    marginTop: 40,
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    flex: 1,
    height: 500,
    paddingTop: 20,
  },
  profileContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  menuBox: {
    backgroundColor: theme.secondry,
    height: 80,
    margin: 10,
    minWidth: 160,
    borderRadius: 12,
    elevation: 4,
  },
  icon: {
    color: "#fff",
    textAlign: "center",
    paddingTop: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
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
    backgroundColor: theme.primary,
    marginTop: 30,
  },
});

export default DashboardScreen;
