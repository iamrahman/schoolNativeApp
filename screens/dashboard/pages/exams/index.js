import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ExamBox from "../../../../components/examBox";

import { ExamList } from "../../../../constants/index";

const ExamScreen = () => {
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
            fontSize: 17,
            padding: 5,
            color: "#FFFFFF",
          }}
        >
          Year
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 60,
            fontWeight: "500",
            color: "#FFFFFF",
            fontFamily: "serif",
          }}
        >
          2020-21
        </Text>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={ExamList}
          renderItem={({ item }) => <ExamBox data={item} />}
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
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

export default ExamScreen;
