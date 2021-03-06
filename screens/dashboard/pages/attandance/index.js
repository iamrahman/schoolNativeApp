import React from "react";

import { StyleSheet, View, Text, FlatList } from "react-native";
import AttandanceStatus from "../../../../components/attandanceStatus";

import { AttandanceList, theme } from "../../../../constants/index";

const AttandanceScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          minHeight: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 60,
            fontWeight: "500",
            color: "#FFFFFF",
            fontFamily: "serif",
          }}
        >
          83.34%
        </Text>
        <Text style={{ textAlign: "center", fontSize: 15, padding: 20, color: theme.white }}>
          Students can able to see the attandance record of last 30 working days
        </Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={AttandanceList}
          renderItem={({ item }) => <AttandanceStatus data={item} />}
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  listView: {
    backgroundColor: theme.primarylight,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
  },
});

export default AttandanceScreen;
