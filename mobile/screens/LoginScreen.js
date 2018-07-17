import React from "react";
import { View, ScrollView, StyleSheet, Button, Text } from "react-native";

import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String
});

const options = {
  auto: "placeholders",
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
  }
};

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Log in"
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log("value: ", value);
  };

  render() {
    return (
      <View style={styles.container}>
        <Form ref={c => (this._form = c)} type={User} options={options} />
        <Button title="Log in" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});
