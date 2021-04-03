import React from "react";

import { StyleSheet, View, Text, FlatList } from "react-native";
import EventCard from "../../../../components/EventCard";

import { EventList, theme } from "../../../../constants/index";

const EventScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          minHeight: 120,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            padding: 5,
            color: "#FFFFFF",
          }}
        >
          School Events
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 45,
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
          data={EventList}
          renderItem={({ item }) => <EventCard data={item} />}
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
    backgroundColor: theme.white,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
  },
});

export default EventScreen;
