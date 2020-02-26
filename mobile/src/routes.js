import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#7d40e7" },
          headerTintColor: "#fff"
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Devradar" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Perfil no Github" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
