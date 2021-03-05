import { StatusBar } from "expo-status-bar";
import React from "react";
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet } from "react-native";
import ApplicationRoutes from "./routes";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ApplicationRoutes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
