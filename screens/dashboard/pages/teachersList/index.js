import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import TeacherItem from "../../../../components/teacher";

import { TeachersList, theme } from "../../../../constants/index";

const TeachersScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>School Teachers</Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={TeachersList}
          renderItem={({ item }) => (
            <TeacherItem data={item} />
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
    backgroundColor: theme.primary,
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
    color: theme.white,
    fontFamily: "serif",
  },
  listView: {
    backgroundColor: theme.white,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
  },
});

export default TeachersScreen;
