import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import TeacherItem from "../../../../components/teacher";

import { TeachersList } from "../../../../constants/index";

const TeachersScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={TeachersList}
        renderItem={({ item }) => <TeacherItem data={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
    backgroundColor: "#070E96",
    marginTop: 30,
  },
});

export default TeachersScreen;
