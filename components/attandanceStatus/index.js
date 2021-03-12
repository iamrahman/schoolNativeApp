import React from "react";
import { Text, StyleSheet, View } from "react-native";
const AttandanceStatus = ({ data }) => {
  const getStatus = (status) => {
    if (status === "present") {
      return ["P", "#137605"];
    } else if (status === "absent") {
      return ["A", "#C51610"];
    } else {
      return ["W", "#F57126"];
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View
          style={{
            ...styles.profileLogo,
            backgroundColor: `${getStatus(data.status)[1]}`,
          }}
        >
          <Text style={styles.status}>{getStatus(data.status)[0]}</Text>
        </View>
        <View>
          <Text style={styles.fullName}>
            {String(data.status).toUpperCase()}
          </Text>
          <Text style={styles.email}>{data.date}</Text>
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
    flexDirection: "row",
    padding: 7,
    backgroundColor: '#EAF1FF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  fullName: {
    fontSize: 12,
    fontWeight: "bold",
    marginStart: 20,
  },
  email: {
    marginStart: 20,
  },
  status: {
    textAlign: "center",
    marginTop: 9,
    fontWeight: "bold",
    color: '#FFFFFF'
  },
  profileLogo: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
});

export default AttandanceStatus;
