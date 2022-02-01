import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Home from "../../screens/Home/index";
import Detail from "../../screens/Detail/index";

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}
