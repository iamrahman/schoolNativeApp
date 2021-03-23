import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import TeacherItem from "../../../../components/teacher";

import { TeachersList } from "../../../../constants/index";

const TeachersScreen = () => {
  //const [activeTeacher, setActiveTeacher] = useState(TeachersList[0]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* <Image
          style={styles.profilImage}
          source={{ uri: activeTeacher.profile }}
        /> */}
        <Text style={styles.title}>School Teachers</Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={TeachersList}
          renderItem={({ item }) => (
            // <TouchableOpacity onPress={(item) => setActiveTeacher(item)}>
            <TeacherItem data={item} />
            // </TouchableOpacity>
          )}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C5EBD",
  },
  headerContainer: {
    minHeight: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    color: "#FFFFFF",
    fontFamily: "serif",
  },
  profilImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
    backgroundColor: "#070E96",
    marginTop: 30,
  },
  listView: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
  },
});

export default TeachersScreen;
