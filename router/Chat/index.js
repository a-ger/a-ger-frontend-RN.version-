import { useLayoutEffect, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Chat from "../../screens/Chat/index";
import ChatDetail from "../../screens/ChatDetail/index";

const Stack = createStackNavigator();
export default function index({ navigation }) {
  const naviState = navigation.getState();
  useLayoutEffect(() => {
    const isChatDetail =
      naviState?.routes[2]?.state?.index === 1 ? false : true;

    navigation.setOptions({
      headerShown: isChatDetail,
    });
  }, [naviState]);

  return (
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Chat"
        component={Chat}
      />
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
    </Stack.Navigator>
  );
}
