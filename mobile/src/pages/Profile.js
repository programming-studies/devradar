import React from "react";
import { Button, View, Text } from "react-native";

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Main... again"
        onPress={() => navigation.push("Main")}
      />
      <Button title="Go to Main" onPress={() => navigation.navigate("Main")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default Profile;
