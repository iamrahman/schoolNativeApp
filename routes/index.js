import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// components
import LandingScreen from "../screens/landing";
import AuthScreen from '../screens/auth';
import { ScreenName } from '../constants';
import DashboardScreen from '../screens/dashboard';

const Stack = createStackNavigator();
const ApplicationRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=" ">
        <Stack.Screen name={ScreenName.LANDING} component={LandingScreen} />
        <Stack.Screen name={ScreenName.AUTH} component={AuthScreen} />
        <Stack.Screen name={ScreenName.DASHBOARD} component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationRoutes;
