import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Card({ content }) {
  console.log(content.urlList[0]);
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.imageThumb}
        source={{
          uri: "https://ager-s3.s3.ap-northeast-2.amazonaws.com/5ccac9b16581470fbd6991847e10bfcf.png",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{content.productName}</Text>
        <Text style={styles.textPrice}>{content.productPrice} 원</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="star" size={20} color="black" />
          <AntDesign name="star" size={20} color="black" />
          <AntDesign name="star" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
          <AntDesign name="staro" size={20} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 2,
    height: 120,
    backgroundColor: "white",
    borderRadius: 10,
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  imageThumb: {
    height: 110,
    width: 110,
    marginLeft: 5,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
  },

  textTitle: {
    fontSize: 20,
  },
  textDuration: {
    fontSize: 15,
    color: "#787878",
  },
  textPrice: {
    fontWeight: "bold",
  },
});
