import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
// components
import LandingScreen from "../screens/landing";
import AuthScreen from "../screens/auth";
import { ScreenName, theme } from "../constants";
import DashboardScreen from "../screens/dashboard";
import TeachersScreen from "../screens/dashboard/pages/teachersList";
import AttandanceScreen from "../screens/dashboard/pages/attandance";
import ExamScreen from "../screens/dashboard/pages/exams";
import ResultsScreen from "../screens/dashboard/pages/results";
//import { Easing } from "react-native-reanimated";

const Stack = createStackNavigator();

const ApplicationRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        initialRouteName={ScreenName.LANDING}
      >
        <Stack.Screen
          name={ScreenName.LANDING}
          component={LandingScreen}
          options={{
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0, // this will hide the shadow of navbar
              backgroundColor: "#FFF",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name={ScreenName.AUTH}
          component={AuthScreen}
          options={{
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0, // this will hide the shadow of navbar
              backgroundColor: "#FFF",
            },
            headerTintColor: theme.primary,
          }}
        />
        <Stack.Screen
          name={ScreenName.DASHBOARD}
          component={DashboardScreen}
          options={{
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0, // this will hide the shadow of navbar
              backgroundColor: theme.primary,
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name={ScreenName.TEACHERS}
          component={TeachersScreen}
          options={{
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: theme.primary,
            },
            headerTintColor: "#FFF",
          }}
        />
        <Stack.Screen
          name={ScreenName.ATTANDANCE}
          component={AttandanceScreen}
          options={{
            title: "",
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0, // this will hide the shadow of navbar
              backgroundColor: theme.primary,
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
              backgroundColor: theme.primary,
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
              backgroundColor: theme.primary,
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
