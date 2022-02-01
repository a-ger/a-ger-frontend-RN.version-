import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function ProfileImage(data) {
  const url = data.url;
  return (
    <Image
      style={styles.imageProfile}
      source={{
        uri: `${url}`,
      }}
    />
  );
}

const styles = StyleSheet.create({
  imageProfile: {
    width: 60,
    height: 60,
    marginLeft: 10,
    borderRadius: 100,
  },
});
