import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Root from "./router";

export default function App() {
  console.disableYellowBox = true;
  return <Root />;
}
