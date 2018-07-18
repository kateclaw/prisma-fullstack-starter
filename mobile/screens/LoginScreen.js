import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  TextInput,
  AsyncStorage,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from "react-native";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

// var DismissKeyboard = require("dismissKeyboard");

// FORM SET UP
import t from "tcomb-form-native";
const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String
  // rememberMe: t.Boolean
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

// //BACKEND SET UP
const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        name
        email
        username
      }
    }
  }
`;

export default class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Log in"
    };
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
  };

  render() {
    return (
      <Mutation mutation={LOGIN}>
        {(login, { data, loading, error }) => {
          return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
              {/* <TouchableWithoutFeedback
                onPress={() => {
                  DismissKeyboard();
                }}
              > */}
              <View style={styles.container}>
                <View style={styles.loginHolder}>
                  <Form
                    ref={c => (this._form = c)}
                    type={User}
                    options={options}
                  />
                  <Button
                    title="Log in"
                    color="#911826"
                    onPress={async () => {
                      const value = this._form.getValue(); // use that ref to get the form value

                      try {
                        const { data } = await login({
                          variables: {
                            username: value.username,
                            password: value.password
                          }
                        });
                        // once have token.
                        // save it to asyncstorage.
                        // redirect user to whatever page you want.
                        AsyncStorage.setItem(data.login.token, "token");
                        AsyncStorage.setItem(
                          data.login.user.username,
                          "username"
                        );

                        this.props.navigation.navigate("Home");

                        console.log({ data });
                      } catch (error) {
                        // redirect to sign up
                        console.log({ error });

                        Alert.alert(
                          "There was an error logging you in. Try again!"
                        );
                      }
                    }}
                  />
                </View>

                <View style={styles.signupOption}>
                  <Text style={{ fontSize: 18 }}>New to Shout?</Text>
                  <Button
                    title="Sign up"
                    color="#911826"
                    onPress={() => this.props.navigation.navigate("Signup")}
                  />
                </View>
              </View>
              {/* </TouchableWithoutFeedback> */}
            </KeyboardAvoidingView>
          );
        }}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
    // backgroundColor: "#ffffff"
  },
  title: {
    color: "#272727",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 100
  },
  signupOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
