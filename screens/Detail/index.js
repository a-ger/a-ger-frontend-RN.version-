import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import ProfileImage from "../../components/Share/ProfileImage";

const index = ({ navigation, data }) => {
  console.disableYellowBox = true;

  // const [product, setProduct] = useState({
  //   productId: "",
  //   productName: "",
  //   productPrice: "",
  //   productDetail: "",
  //   productViewCnt: "",
  //   category: "",
  //   status: "",
  //   createdAt: "",
  //   updatedAt: "",
  //   urlList: [],
  // });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageMain}
          source={{
            uri: "https://ager-s3.s3.ap-northeast-2.amazonaws.com/5ccac9b16581470fbd6991847e10bfcf.png",
          }}
        />
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.userInfoContainer}>
          <ProfileImage url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpvh3OIeLw_KFAXUwCPKMpEFt4Vy_UdRBhBQ&usqp=CAU" />
          <Text style={styles.textSellerName}>악어</Text>
        </View>

        <View style={styles.evaluationContainer}>
          <Text style={styles.textManner}>매너 지수</Text>
          <Text style={styles.textViews}>조회수 OO회</Text>
        </View>
      </View>

      <View style={styles.productInfoContainer}>
        <View style={styles.productShortInfoBox}>
          <View style={styles.categoryAndNameBox}>
            <Text style={styles.textProductName}>애기 용품 팔아</Text>
            <Text style={styles.textCategory}>가전제품 · 00분 전</Text>
          </View>
          <View style={styles.stateBox}></View>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.textProductDescription}>
            2번 밖에 사용 안했어요^^ 낮에 연락부탁드려요. 직거래 원합니다!!!
          </Text>
        </View>

        <View style={styles.priceAndChattingBox}>
          <View style={styles.priceBox}>
            <Text style={styles.textPrice}>제시가:</Text>
            <Text
              style={
                (styles.textPrice,
                { color: "grey", textDecorationLine: "underline" })
              }
            >
              {" "}
              100000원{" "}
            </Text>
          </View>
          <View style={styles.chattingBox}>
            <Button title="채팅하기" style={styles.buttonChatting} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  imageMain: {
    width: "100%",
    height: "100%",
  },

  profileContainer: {
    flex: 0.3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
  },
  userInfoContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  textSellerName: {
    marginLeft: 10,
    fontSize: 20,
  },
  imageProfile: {
    width: 60,
    height: 60,
    marginLeft: 10,
    borderRadius: 100,
  },

  evaluationContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 50,
  },
  textManner: {
    fontSize: 12,
  },
  textViews: {
    fontSize: 12,
    color: "#787878",
  },

  productInfoContainer: {
    flex: 1,
  },
  productShortInfoBox: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  categoryAndNameBox: {
    flex: 1,
    justifyContent: "center",
  },

  textCategory: {
    fontSize: 10,
    marginLeft: 8,
    textAlign: "left",
    marginTop: 10,
    color: "grey",
    textDecorationLine: "underline",
    fontSize: 10,
  },
  textProductName: {
    marginTop: 3,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  stateBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textProductState: {
    marginTop: 3,
    fontSize: 18,
    backgroundColor: "grey",
  },
  descriptionBox: { flex: 1 },

  textProductDescription: {
    marginLeft: 8,
    marginRight: 8,
    textAlign: "left",
    fontSize: 16,
  },
  priceAndChattingBox: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#d9d9d9",
  },
  priceBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textPrice: {
    marginLeft: 10,
    textAlign: "center",
  },
  chattingBox: {
    flex: 1,
    justifyContent: "center",
  },
  buttonChatting: {
    height: 120,
  },
});

export default index;
