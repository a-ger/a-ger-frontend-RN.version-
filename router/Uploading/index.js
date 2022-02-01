import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Uploading from "../../screens/Uploading/index";

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Uploading"
        component={Uploading}
      />
    </Stack.Navigator>
  );
}
