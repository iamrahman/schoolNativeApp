import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import AttandanceBar from "../../../../components/attandanceBar";
import AttandanceStatus from "../../../../components/attandanceStatus";

import { AttandanceList } from "../../../../constants/index";

const AttandanceScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          minHeight: 200,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 60, fontWeight: '500', color: 'darkgreen', fontFamily: 'serif' }}>83.34%</Text>
        <Text style={{ textAlign: "center", fontSize: 15, padding: 20 }}>Students can able to see the attandance record of last 30 working days</Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={AttandanceList}
          renderItem={({ item }) => <AttandanceStatus data={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  listView: {
    backgroundColor: "#1C5EBD",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
  },
});

export default AttandanceScreen;
