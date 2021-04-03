import React from "react";

import { Text, StyleSheet, View, Image } from "react-native";
const EventCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{String(data.name).toUpperCase()}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image style={styles.cardImg} source={{ uri: data.image_url }} />
        </View>
        <View>
          <Text style={styles.subTitle}>
            Event Date : {data?.startDate ? data.startDate : "Not Declared"}
          </Text>
        </View>
        <View>
          <Text style={styles.subTitle}>Event Organizer : Not Declared</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    marginBottom: 10,
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
    elevation: 4,
  },
  cardImg: {
    width: 300,
    height: 150,
    flex: 1,
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
    padding: 5,
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

export default EventCard;
