import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "../../components/Home/Card";
import products from "../../data/product.json";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getKakaoLoginUrl } from "../../api/Account";

const index = ({ navigation, route }) => {
  console.disableYellowBox = true;

  const [state, setState] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: "홈",
      headerStyle: {
        backgroundColor: "#fff",
        shadowColor: "#1F266A",
        height: 100,
      },
      headerRight: () => (
        <MaterialCommunityIcons
          onPress={() => {
            getKakaoLoginUrl()
              .then((res) => {
                const url = res.data.data;
                console.log("HOme", { url });
                navigation.navigate("KakaoLogin", { url: url });
              })
              .catch((err) => console.log(err));
          }}
          style={{ marginRight: 10 }}
          name="account-circle-outline"
          color={"#000"}
          size={35}
        />
      ),
      headerTintColor: "black",
    });

    let productInfo = products.data;
    setState(productInfo);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {state.map((content, i) => {
        return (
          <Card
            content={content}
            key={content.productId}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default index;
