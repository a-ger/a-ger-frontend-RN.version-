import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import products from "../../data/product.json";
import HistoryCard from "../../components/Profile/HistoryCard";
import ProfileImage from "../../components/Share/ProfileImage";

const index = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    let productInfo = products.data;
    setState(productInfo);
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer}>
          <ProfileImage url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpvh3OIeLw_KFAXUwCPKMpEFt4Vy_UdRBhBQ&usqp=CAU" />
        </View>
        <View style={styles.profileInfoContainer}>
          <Text style={styles.userName}>악어</Text>
          <Text style={styles.userManner}>매너지수</Text>
          <View
            style={{
              backgroundColor: "#e9e9e9",
              width: 100,
              height: 5,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "skyblue",
                width: 60,
                height: 5,
                borderRadius: 20,
              }}
            ></View>
          </View>
        </View>
      </View>

      <View style={styles.historyContainer}>
        <TouchableOpacity style={styles.salesHistory}>
          <View style={styles.iconContainer}>
            <AntDesign name="isv" size={30} color="black" />
            <Text>판매내역</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.purchaseHistory}>
          <View style={styles.iconContainer}>
            <Feather name="shopping-bag" size={30} color="black" />
            <Text>구매내역</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: 5, backgroundColor: "#f3f3f3", marginTop: 20 }} />

      {state.map((content, i) => {
        return <HistoryCard content={content} key={content.productId} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  profileImageContainer: {
    marginLeft: 25,
  },
  profileInfoContainer: {
    flexDirection: "column",
    marginLeft: 20,
  },
  userName: {
    fontSize: 20,
  },
  userManner: {
    fontSize: 13,
    color: "#a3a3a3",
  },

  historyContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

  iconContainer: {
    width: 80,
    height: 80,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#e9e9e9",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default index;
