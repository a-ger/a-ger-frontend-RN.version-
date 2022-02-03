import { useState } from "react";
import { connect } from "react-redux";
import SafeAreaView from "react-native-safe-area-view";
import { deviceWidth, deviceHeight } from "../../helper";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const index = ({ navigation, loginUser }) => {
  const [chats, setChats] = useState([
    {
      id: 0,
      subject: "안녕하세요",
      read: false,
      sendId: "kevin",
      sendName: "케빈",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GdbCkOVnbU6LbzaRWR7rTbrM8Gd052e_qG9FEPcFIvgJ0hNV0KgUDz7Szyp8ydN1_ho&usqp=CAU",
      toName: "케인",
      sendDate: "1분전",
    },
    {
      id: 1,
      subject: "안녕하세요",
      read: false,
      sendName: "케빈",
      profile:
        "https://file.mk.co.kr/meet/neds/2021/04/image_readtop_2021_330747_16177500644599916.jpg",
      sendId: "kevin",
      toName: "케인",
      sendDate: "1분전",
    },
    {
      id: 2,
      subject: "안녕하세요",
      read: false,
      sendName: "케빈",
      profile:
        "https://w.namu.la/s/40de86374ddd74756b31d4694a7434ee9398baa51fa5ae72d28f2eeeafdadf0c475c55c58e29a684920e0d6a42602b339f8aaf6d19764b04405a0f8bee7f598d2922db9475579419aac4635d0a71fdb8a4b2343cb550e6ed93e13c1a05cede75",
      sendId: "kevin",
      toName: "케인",
      sendDate: "3분전",
    },
    {
      id: 3,
      subject: "안녕하세요",
      read: false,
      sendName: "케인",
      profile:
        "https://w.namu.la/s/40de86374ddd74756b31d4694a7434ee9398baa51fa5ae72d28f2eeeafdadf0c475c55c58e29a684920e0d6a42602b339f8aaf6d19764b04405a0f8bee7f598d2922db9475579419aac4635d0a71fdb8a4b2343cb550e6ed93e13c1a05cede75",
      sendId: "kayne",
      toName: "케빈",
      sendDate: "10분전",
    },
  ]);

  const renderItem = ({ index, item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => navigation.navigate("ChatDetail", { id: item.id })}
      >
        <View style={styles.container}>
          <View style={styles.chatBox}>
            <Image
              style={styles.profile}
              source={{
                uri: item.profile,
              }}
            />
            <View style={styles.chat}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.sendName}>{item.sendName}</Text>
                <Text style={styles.sendDate}>{item.sendDate}</Text>
              </View>
              <View style={{ width: deviceWidth - 100, marginTop: 5 }}>
                <Text
                  style={{
                    flexWrap: "wrap",
                  }}
                >
                  {item.subject}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtracto={(item) => item.id}
      />
    </SafeAreaView>
  );
};

function changeToProps(state) {
  return {
    loginUser: state.loginUser,
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  chatBox: {
    marginTop: 15,
    flexDirection: "row",
    padding: 15,
    width: deviceWidth - 20,
    alignItems: "center",
    borderRadius: 12,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  chat: {
    marginLeft: 12,
    justifyContent: "space-around",
  },
  sendName: {
    fontSize: 13,
    color: "#4caf50",
    fontWeight: "bold",
  },
  sendDate: {
    fontSize: 12,
    color: "#9e9e9e",
    marginLeft: 6,
  },
});

export default connect(changeToProps)(index);
