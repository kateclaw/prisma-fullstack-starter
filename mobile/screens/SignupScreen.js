import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  AsyncStorage
} from "react-native";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

// FORM SET UP
import t from "tcomb-form-native";
const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  name: t.String,
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

// BACKEND SETUP
const SIGNUP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $name: String!
    $username: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      username: $username
    ) {
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

export default class SignupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Sign up"
    };
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log("value: ", value);
  };

  render() {
    return (
      <Mutation mutation={SIGNUP}>
        {(signup, { data, loading, error }) => {
          return (
            <View style={styles.container}>
              <Form ref={c => (this._form = c)} type={User} options={options} />
              <Button
                title="Sign up"
                onPress={async () => {
                  const value = this._form.getValue(); // use that ref to get the form value

                  try {
                    const { data } = await signup({
                      variables: {
                        email: value.email,
                        name: value.name,
                        username: value.username,
                        password: value.password
                      }
                    });
                    AsyncStorage.setItem("token", data.signup.token);
                    AsyncStorage.setItem("username", data.signup.user.username);

                    // CHANGE THIS TO GROUP PAGE
                    this.props.navigation.navigate("Home");

                    console.log({ data });
                  } catch (error) {
                    // redirect to sign up
                    console.log({ error });

                    Alert.alert(
                      "There was an error signing you up. Try again!"
                    );
                  }
                }}
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
