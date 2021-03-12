import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import TeacherItem from "../../../../components/teacher";

import { TeachersList } from "../../../../constants/index";

const TeachersScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>

        </View>
        <View style={styles.listView}>
          <FlatList
            data={TeachersList}
            renderItem={({ item }) => <TeacherItem data={item} />}
            keyExtractor={(item) => String(item.id)}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C5EBD',
  },
  headerContainer:{
    minHeight: 200,
    justifyContent: 'center',
    alignItems:'center'
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
