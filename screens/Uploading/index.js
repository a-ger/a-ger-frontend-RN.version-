import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const index = () => {
  const [name, onChangeName] = React.useState("");
  const [cate, onChangeCate] = React.useState("");
  const [price, onChangePrice] = React.useState("");
  const [detail, onChangeDetail] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.addImageContainer}>
        <TouchableOpacity
          style={{
            width: 250,
            height: 250,
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#e9e9e9",
            borderRadius: 10,
            borderStyle: "dotted",
            borderWidth: 2,
          }}
        >
          <AntDesign name="addfile" size={80} color="black" />

          <View style={{ alignItems: "flex-start", marginTop: 30 }}>
            <Text style={styles.imageRegistrationGuide}>
              - 최대 5개의 이미지 등록이 가능합니다.
            </Text>
            <Text style={styles.imageRegistrationGuide}>
              - 상품 이미지는 00x00에 최적화 되어있습니다.
            </Text>
            <Text style={styles.imageRegistrationGuide}>
              - 이미지는 상품등록 시 정사각형으로 짤려서 등록됩니다.
            </Text>
            <Text style={styles.imageRegistrationGuide}>
              - 첫 번째 이미지는 첫 화면의 상품 리스트에 장식됩니다.
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.inputProductInfoContainer}>
        <View style={styles.inputArea}>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={onChangeName}
              value={name}
              placeholder="상품 이름"
            />
          </SafeAreaView>
        </View>
      </View>

      <View style={styles.inputProductInfoContainer}>
        <View style={styles.inputArea}>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={onChangeCate}
              value={cate}
              placeholder="카테고리"
            />
          </SafeAreaView>
        </View>
      </View>

      <View style={styles.inputProductInfoContainer}>
        <View style={styles.inputArea}>
          <Text>₩</Text>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={onChangePrice}
              value={price}
              placeholder="가격"
              keyboardType="numeric"
            />
          </SafeAreaView>
        </View>
      </View>

      <View
        style={{
          alignItems: "flex-start",
          marginTop: 5,
          borderBottomColor: "#d4d4d4",
        }}
      >
        <View
          style={{
            flex: 1,
            height: 98,
            alignItems: "center",
            borderRadius: 5,
            margin: 10,
          }}
        >
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={onChangeDetail}
              value={detail}
              multiline
              numberOfLines={4}
              placeholder="100자 이내로 간결한 상세설명을 적어주세요."
            />
          </SafeAreaView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  addImageContainer: {
    alignItems: "center",
    borderBottomColor: "#d4d4d4",
    padding: 20,
    borderBottomWidth: 1,
  },
  imageRegistrationGuide: {
    fontSize: 10,
    fontStyle: "italic",
    marginTop: 3,
    textAlign: "left",
  },

  inputProductInfoContainer: {
    alignItems: "flex-start",
    marginTop: 5,
    borderBottomColor: "#d4d4d4",
    borderBottomWidth: 1,
  },

  inputArea: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderRadius: 5,
    margin: 10,
  },
  input: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default index;
