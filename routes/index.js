import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// components
import LandingScreen from "../screens/landing";
import AuthScreen from "../screens/auth";
import { ScreenName } from "../constants";
import DashboardScreen from "../screens/dashboard";
import TeachersScreen from "../screens/dashboard/pages/teachersList";
import AttandanceScreen from "../screens/dashboard/pages/attandance";

const Stack = createStackNavigator();
const ApplicationRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=" ">
        <Stack.Screen name={ScreenName.LANDING} component={LandingScreen} />
        <Stack.Screen name={ScreenName.AUTH} component={AuthScreen} />
        <Stack.Screen name={ScreenName.DASHBOARD} component={DashboardScreen} />
        <Stack.Screen name={ScreenName.TEACHERS} component={TeachersScreen} />
        <Stack.Screen
          name={ScreenName.ATTANDANCE}
          component={AttandanceScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// options={{
//   title: " ",
//   headerStyle: {
//     backgroundColor: "#f4511e",
//   },
//   headerTintColor: "#fff",
//   headerTitleStyle: {
//     fontWeight: "bold",
//   },
// }}

export default ApplicationRoutes;
