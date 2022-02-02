import React from "react";
import { Button } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Home from "../../screens/Home/index";
import Detail from "../../screens/Detail/index";

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          headerRight: () => (
            <MaterialCommunityIcons
              onPress={() => alert("This is a button!")}
              style={{ marginRight: 10 }}
              name="account-circle-outline"
              color={"#000"}
              size={35}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}
