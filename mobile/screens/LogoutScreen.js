import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default class LogoutScreen extends React.Compondent {
  // static navigationOptions = {
  //     drawerLabel: "Home"
  //   };
  render() {
    return (
      <View>
        <Text>Are you sure you want to logout?</Text>
        <Button text="Log out" />
      </View>
    );
  }
}
