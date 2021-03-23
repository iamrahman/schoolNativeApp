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
import ExamScreen from "../screens/dashboard/pages/exams";
import ResultsScreen from "../screens/dashboard/pages/results";

const Stack = createStackNavigator();
const ApplicationRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=" ">
        <Stack.Screen name={ScreenName.LANDING} component={LandingScreen} />
        <Stack.Screen name={ScreenName.AUTH} component={AuthScreen} />
        <Stack.Screen
          name={ScreenName.DASHBOARD}
          component={DashboardScreen}
          options={{
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0, // this will hide the shadow of navbar
              backgroundColor: "#1C5EBD",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen 
          name={ScreenName.TEACHERS} 
          component={TeachersScreen} 
          options={{
            title: "",
            headerStyle:{
              elevation:0,
              shadowOpacity:0,
              backgroundColor: "#1C5EBD"
            },
            headerTintColor: "#FFF"
          }}/>
        <Stack.Screen
          name={ScreenName.ATTANDANCE}
          component={AttandanceScreen}
          options={{
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0, // this will hide the shadow of navbar
              backgroundColor: "#1C5EBD",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name={ScreenName.EXAMS}
          component={ExamScreen}
          options={{
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0, // this will hide the shadow of navbar
              backgroundColor: "#1C5EBD",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name={ScreenName.RESULTS}
          component={ResultsScreen}
          options={{
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0, // this will hide the shadow of navbar
              backgroundColor: "#1C5EBD",
            },
            headerTintColor: "#fff",
          }}
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
