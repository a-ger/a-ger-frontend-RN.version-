import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//stacks
import HomeStack from "./Home/index";
import NoticeStack from "./Notice/index";
import ChatStack from "./Chat/index";
import ProfileStack from "./Profile/index";
import UploadingStack from "./Uploading/index";

const Tab = createBottomTabNavigator();

const Root = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="홈"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "홈",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="게시판"
        component={NoticeStack}
        options={{
          tabBarLabel: "게시판",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="상품등록"
        component={UploadingStack}
        options={{
          tabBarLabel: "상품등록",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="채팅"
        component={ChatStack}
        options={{
          tabBarLabel: "채팅",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="나의 프로필"
        component={ProfileStack}
        options={{
          tabBarLabel: "나의 프로필",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-tie"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function index() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
