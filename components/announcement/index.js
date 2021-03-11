import React from "react";
import { Text } from "react-native";
import { View } from "native-base";
const AnnouncmentBox = () => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <Text>Messages</Text>
      <View
        style={{
          height: 250,
          width: 330,
          marginTop: 10,
          padding: 10,
          backgroundColor: "#F0F1F1",
        }}
      >
        <Text style={{ marginTop: 5 }}>
          <Text style={{ fontWeight: "bold" }}>Principal: </Text>26th of Jan
          2021 is the holiday due to Republic Day
        </Text>
        <Text style={{ marginTop: 5 }}>
          <Text style={{ fontWeight: "bold" }}>Principal: </Text>Final Exams
          will be held on 12th of March 2020
        </Text>
        <Text style={{ marginTop: 5 }}>
          <Text style={{ fontWeight: "bold" }}>Rohini Sharma: </Text>Your
          Physics Class test for Chapter 1-5 will be held on 29th of Jan
        </Text>
        <Text style={{ marginTop: 5 }}>
          <Text style={{ fontWeight: "bold" }}>Atul Singh: </Text>Sports Event
          for 2020 is cancelled due to COVID 19
        </Text>
        <Text style={{ marginTop: 5 }}>
          <Text style={{ fontWeight: "bold" }}>Principal: </Text>Class will be
          started from 10th of March 2021 from class 6 to 12. All students are
          requested to wear mask for your safty
        </Text>
      </View>
    </View>
  );
};

export default AnnouncmentBox;
