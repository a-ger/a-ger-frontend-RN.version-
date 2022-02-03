import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
// other import settings...

const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;

const index = ({ route, navigation }) => {
  const uri = route.params.url;
  console.log(route.params.url);

  function LogInProgress(data) {
    const exp = "code=";
    var condition = data.indexOf(exp);

    if (condition != -1) {
      var request_code = data.substring(condition + exp.length);
      console.log("access code :: " + request_code);

      // 토큰값 받기

      //requestToken(request_code);
    }
  }

  const requestToken = async (request_code) => {
    var returnValue = "none";
    var request_token_url = "https://kauth.kakao.com/oauth/token";
    axios({
      method: "post",
      url: request_token_url,
      params: {
        grant_type: "authorization_code",
        client_id: "ic",
        redirect_uri: "url",
        code: request_code,
      },
    })
      .then(function (response) {
        returnValue = response.data.access_token;
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={["*"]}
        scalesPageToFit={false}
        style={{ marginTop: 30 }}
        source={{
          uri: "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=1cb33b602a71c7122806d81f3dd44f6e&redirect_uri=http://localhost:8080/api/account/login",
        }}
        injectedJavaScript={runFirst}
        javaScriptEnabled={true}
        onMessage={(event) => {
          LogInProgress(event.nativeEvent["url"]);
        }}
        // onMessage ... :: webview에서 온 데이터를 event handler로 잡아서 logInProgress로 전달
      />
    </View>
  );
};

export default index;