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

const Group = t.struct({
  name: t.String,
  admins: t.String,
  members: t.String
});

// state = {
//     name: "",
//     admins: "",
//     members: "",
// }
const options = {
  auto: "placeholders"
};

// //BACKEND SET UP
const CREATE_GROUP = gql`
  mutation createGroup(
    $username: String!
    $name: String!
    $members: [String!]!
    $admins: [String!]!
  ) {
    createGroup(
      username: $username
      name: $name
      members: $members
      admins: $admins
    ) {
      name
      admins {
        username
      }
      members {
        username
      }
    }
  }
`;

export default class CreateGroupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Create Group Screen"
    };
  };

  render() {
    return (
      <Mutation mutation={CREATE_GROUP}>
        {(createGroup, { data, loading, error }) => {
          return (
            <View style={styles.container}>
              <Form
                ref={c => (this._CreateGroupForm = c)}
                type={Group}
                options={options}
              />
              <Button
                title="Create Group"
                onPress={async () => {
                  const value = this._CreateGroupForm.getValue();
                  const members = value.members.split(",");
                  const admins = value.admins.split(",");
                  const username = await AsyncStorage.getItem("username");
                  console.log({
                    name: value.name,
                    admins,
                    members,
                    username
                  });
                  try {
                    const { data } = await createGroup({
                      variables: {
                        username: username,
                        name: value.name,
                        admins: admins,
                        members: members
                      }
                    });
                    // once have token.
                    // save it to asyncstorage.
                    // redirect user to whatever page you want.

                    this.props.navigation.navigate("Groups");

                    console.log({ data });
                  } catch (error) {
                    // redirect to sign up
                    console.log({ error });

                    Alert.alert(
                      "There was an error creating a Group. Try again!"
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
