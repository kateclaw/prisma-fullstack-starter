import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileHolder}>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Name</Text>
            <Text style={styles.profileUser}>Username</Text>
            <Text style={styles.profileEmail}>Email</Text>
          </View>
          <View style={styles.profileImg}>
            <Image source={require("../assets/images/profile.png")} />
          </View>
        </View>
        <View style={styles.logoutHolder}>
          {/* REMOVE TOKEN - LOG OUT USER */}
          <Button
            title="Log out"
            color="#911826"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>

        <Query query={GET_MY_PROFILE}>
          {({ data, loading, error }) => {
            if (loading) {
              return "Loading...";
            }
            if (error) {
              return "Oops, somehing blew up.";
            }
            if (!data) {
              return "no data";
            }
            return (
              <View>
                {data.me.map(mine => {
                  return <Text key={mine.id}>{mine.name}</Text>;
                })}
              </View>
            );
          }}
        </Query>
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
    // marginLeft: 50
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-evenly"
  },
  profileInfo: {
    // padding: 20
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
  }
});
