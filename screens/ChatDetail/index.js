import { useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const index = ({ route, navigation, loginUser }) => {
  const { id } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${id}`,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

const chageToProps = (state) => {
  return {
    loginUser: state.loginUser,
  };
};

export default connect(chageToProps)(index);
