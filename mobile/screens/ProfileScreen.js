import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  AsyncStorage,
  StatusBar
} from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_MY_PROFILE = gql`
  query getMyProfile {
    me {
      id
      name
      email
      username
      # groups {
      #   id
      #   name
      # }
      # adminOf {
      #   id
      #   name
      # }
      # memberOf {
      #   id
      #   name
      # }
    }
  }
`;

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Profile"
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Query query={GET_MY_PROFILE} fetchPolicy="network-only">
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <View style={styles.loader}>
                  <Image source={require("../assets/images/loader.gif")} />
                </View>
              );
            }
            if (error) {
              if (error.message === "GraphQL error: Not authorized") {
                this.props.navigation.navigate("Login");
              }
            }
            if (!data.me) {
              return <Text>"no data"</Text>;
            }

            return (
              <View style={styles.profileHolder}>
                <View style={styles.profileInfo}>
                  <Text style={styles.profileName}>{data.me.name}</Text>
                  <Text style={styles.profileUser}>{data.me.username}</Text>
                  <Text style={styles.profileEmail}>{data.me.email}</Text>
                </View>
                <View style={styles.profileImg}>
                  <Image source={require("../assets/images/profile.png")} />
                </View>
              </View>
            );
          }}
        </Query>

        <View style={styles.logoutHolder}>
          <Button
            title="Log out"
            color="#911826"
            onPress={async () => {
              await AsyncStorage.removeItem("token");
              this.props.navigation.navigate("Login");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  profileHolder: {
    flex: 1,
    marginTop: 100,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-evenly"
  },
  profileName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#911826"
  },
  profileUser: {
    fontSize: 20,
    color: "#676767"
  },
  profileEmail: {
    fontSize: 20,
    color: "#676767"
  },
  logoutHolder: {
    marginBottom: 100
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
