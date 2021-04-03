import React from "react";

import { Text, StyleSheet, View } from "react-native";
const ExamBox = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{String(data.name).toUpperCase()}</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>
            Start Date : {data?.startDate ? data.startDate : "Not Declared"}
          </Text>
        </View>
        <View>
          <Text style={styles.subTitle}>
            End Date : {data?.endDate ? data.endDate : "Not Declared"}
          </Text>
        </View>
        <View>
          <Text style={styles.download}>Download</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
  },
  row: {
    flexDirection: "column",
    padding: 7,
    backgroundColor: "#EAF1FF",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    marginStart: 20,
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
  },
  download: {
    color: "red",
    fontWeight: "bold",
    marginStart: 20,
  },
  subTitle: {
    marginStart: 20,
  },
  status: {
    textAlign: "center",
    marginTop: 9,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  profileLogo: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
});

export default ExamBox;
