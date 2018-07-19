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
  Scene
} from "react-native";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

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
      title: "Log in",
      header: null
    };
  };

async componentDidMount() {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      this.props.navigation.navigate("Home");
    }
  }  

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
  };

  render() {
    return (
      <Mutation mutation={LOGIN}>
        {(login, { data, loading, error }) => {
          return (
            <View style={styles.container}>
              <Form ref={c => (this._form = c)} type={User} options={options} />
              <Button
                title="Log in"
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
                    await AsyncStorage.setItem("token", data.login.token);
                    await AsyncStorage.setItem(
                      "username",
                      data.login.user.username
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

              <Text>New to Shout?</Text>
              <Button
                title="Sign up"
                onPress={() => this.props.navigation.navigate("Signup")}
              />
            </View>
          );
        }}
      </Mutation>
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
