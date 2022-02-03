import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { getUserInfo } from "../../api/Account";
import axios from "axios";

// other import settings...

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const index = ({ route, navigation }) => {
  const uri = route.params.url;
  console.log(uri);

  function LogInProgress(data) {
    console.log("이건 통과 된거냐?");

    const exp = "code=";
    var condition = data.indexOf(exp);

    if (condition != -1) {
      var request_code = data.substring(condition + exp.length);
      console.log("access code :: " + request_code);

      requestToken(request_code);
    }
  }

  const requestToken = async (request_code) => {
    var returnValue = "none";
    console.log("이것도 됨?", request_code);

    const request_token_url = "https://kauth.kakao.com/oauth/token";
    axios({
      method: "post",
      url: request_token_url,
      params: {
        grant_type: "authorization_code",
        client_id: "1cb33b602a71c7122806d81f3dd44f6e",
        redirect_uri:
          "http://a5ca-175-192-208-49.ngrok.io/api/account/login-url",
        code: request_code,
        client_secret: "1r3mG2aVyiTinsQUGC5HJ0EWr5jYLGZk",
      },
    })
      .then(function (response) {
        console.log("결과", response);
      })
      .catch(function (error) {
        console.error("error", error);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        scalesPageToFit={false}
        style={{ marginTop: 30 }}
        source={{
          uri: "https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A8080%252Fapi%252Faccount%252Flogin%26client_id%3D1cb33b602a71c7122806d81f3dd44f6e",
        }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        onMessage={(event) => {
          console.log(event);
          LogInProgress(event.nativeEvent["url"]);
        }}
        // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
      />
    </View>
  );
};
// "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=1cb33b602a71c7122806d81f3dd44f6e&redirect_uri=http://localhost:8080/api/account/login"
export default index;
