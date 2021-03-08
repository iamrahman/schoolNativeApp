import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AttandanceBar from "../../components/attandanceBar";
import AnnouncmentBox from "../../components/announcement";
const DashboardScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <View>
            <Image
              style={styles.profilImage}
              source={{
                uri:
                  "http://adeyl.com/iteach/sites/default/files/uploads/student_images/PASSPORT%20SIZE%20PHOTO%20NAFISA.jpg",
              }}
            />
          </View>
          <View>
            <Text style={styles.name}>Anjali Sharma</Text>
          </View>
          <View>
            <Text style={{color: 'black'}}>Class IX - A</Text>
          </View>
          <AttandanceBar/>
          <AnnouncmentBox/>
        </View>
        <View style={styles.container}>
          <View style={styles.menuBox}>
            <Text style={styles.text}>Profile</Text>
          </View>
          <View style={styles.menuBox}>
            <Text style={styles.text}>Exam</Text>
          </View>
          <View style={styles.menuBox}>
            <Text style={styles.text}>Results</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.menuBox}>
            <Text style={styles.text}>Teachers</Text>
          </View>
          <View style={styles.menuBox}>
            <Text style={styles.text}>Timetable</Text>
          </View>
          <View style={styles.menuBox}>
            <Text style={styles.text}>Help</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.menuBox}>
            <Text style={styles.text}>Assignment</Text>
          </View>
          <View style={styles.menuBox}>
            <Text style={styles.text}>Leaves</Text>
          </View>
          <View style={styles.menuBox}>
            <Text style={styles.text}>Holidays</Text>
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
  profileContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  menuBox: {
    backgroundColor: "#2A99A2",
    height: 50,
    margin: 10,
    minWidth: 100,
    borderRadius: 10,
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    padding: 15,
  },
  name: {
    color: "#000000",
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
