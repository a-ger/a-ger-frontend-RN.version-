import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Chat from "../../screens/Chat/index";

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Chat"
        component={Chat}
      />
    </Stack.Navigator>
  );
}
