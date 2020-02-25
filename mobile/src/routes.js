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
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
