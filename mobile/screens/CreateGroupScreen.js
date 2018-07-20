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
  Scene,
  TouchableOpacity,
  Image
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
      title: "Create Group",
      header: null
    };
  };

  render() {
    return (
      <View style={styles.pageHolder}>
        <View style={styles.backHeader}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Group");
            }}
            style={styles.backButton}
          >
            <Image
              style={{ width: 18, height: 18 }}
              source={require("../assets/images/back-arrow.png")}
            />
          </TouchableOpacity>
        </View>
        <Mutation mutation={CREATE_GROUP}>
          {(createGroup, { data, loading, error }) => {
            return (
              <View style={styles.container}>
                <Form
                  style={styles.formHolder}
                  ref={c => (this._CreateGroupForm = c)}
                  type={Group}
                  options={options}
                />
                <Button
                  title="Create"
                  color="#911826"
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageHolder: {
    flex: 1
  },
  backHeader: {
    height: 60,
    width: "100%",
    backgroundColor: "#911826",
    flex: 0.1,
    alignItems: "flex-start",
    justifyContent: "flex-end"
  },
  backButton: {
    marginLeft: 10,
    marginBottom: 10
  },
  container: {
    justifyContent: "center",
    padding: 20,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffff"
  },
  formHolder: {
    marginTop: 100
  }
});
