import React from "react";
import { Text, StyleSheet, View } from "react-native";
const ResultStatus = ({ data }) => {
  const getStatus = (obtained, min, max) => {
    if (obtained >= min) {
      return [`${((obtained/max)*100).toFixed(1)}%`, "#137605"];
    } else {
      return [`${((obtained/max)*100).toFixed(1)}%`, "#C51610"];
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View
          style={{
            ...styles.profileLogo,
            backgroundColor: `${getStatus(data.obtained, data.min, data.max)[1]}`,
          }}
        >
          <Text style={styles.status}>{getStatus(data.obtained, data.min, data.max)[0]}</Text>
        </View>
        <View>
          <Text style={styles.fullName}>
            {String(data.subject).toUpperCase()}
          </Text>
          <Text style={styles.email}>Score - {data.obtained}  |  Max - {data.max}  |  Min - {data.min}</Text>
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
    marginTop: 6
  },
  email: {
    marginStart: 20,
  },
  status: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
    color: '#FFFFFF'
  },
  profileLogo: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});

export default ResultStatus;
