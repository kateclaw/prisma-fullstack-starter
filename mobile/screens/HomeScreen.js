import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  AsyncStorage,
  Button
} from "react-native";
import { WebBrowser } from "expo";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: "Home",
      headerMode: "screen",
      mode: "card"
    };
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      this.props.navigation.navigate("Login");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.homeHolder}>
          <Text style={styles.welcomeText}>Welcome to Shout!</Text>
          <View style={styles.buttonsHolder}>
            <Button
              title="See Groups"
              color="#911826"
              onPress={async () => {
                this.props.navigation.navigate("Groups");
              }}
            />
            <Button
              title="See Profile"
              color="#911826"
              onPress={async () => {
                this.props.navigation.navigate("Profile");
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#911826"
  },
  buttonsHolder: {
    marginTop: 30
  }
});
