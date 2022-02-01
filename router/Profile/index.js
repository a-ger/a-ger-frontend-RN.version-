import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Profile from "../../screens/Profile/index";

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
}
