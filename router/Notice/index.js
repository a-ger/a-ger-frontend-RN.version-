import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Notice from "../../screens/Notice/index";

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Notice"
        component={Notice}
      />
    </Stack.Navigator>
  );
}
