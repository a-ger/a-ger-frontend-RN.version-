import { useState } from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { createStore, combineReducers } from "redux";
import { StyleSheet, Text, View } from "react-native";
import Root from "./router";

export default function App() {
  const [loginUser, setLoginUser] = useState({
    id: "kevin",
    name: "케빈",
  });

  const loginUserRedux = (state = loginUser, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const store = createStore(combineReducers({ loginUser: loginUserRedux }));

  return (
    <Provider store={store}>
      <StatusBar auto={true} animated={true} />
      <Root />
    </Provider>
  );
}
