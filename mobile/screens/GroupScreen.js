import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import Post from "../components/Post";
// import CreateGroupScreen from "../CreateGroupScreen"
// import CreateGroupScreen from "./CreateGroupScreen";

const GET_GROUPS = gql`
  query {
    me {
      groups {
        id
        name
      }
    }
  }
`;

export default class GroupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Groups"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Query query={GET_GROUPS} pollInterval={500}>
            {({ loading, error, data }) => {
              if (loading) {
                return "Loading...";
              }

              if (error) {
                if (error.message === "GraphQL error: Not authorized") {
                  this.props.navigation.navigate("Login");
                }
                return "Uh oh something ain't right";
              }

              return (
                <View>
                  <Button
                    title="Create Group"
                    color="#911826"
                    onPress={() => {
                      this.props.navigation.navigate("CreateGroup");
                    }}
                  />
                  {data.me.groups.map(display => {
                    // return <Text key={display.id}>{display.name}</Text>;
                    return (
                      <View style={styles.groupHolder}>
                        <Button
                          title={display.name}
                          color="#272727"
                          onPress={() => {
                            this.props.navigation.navigate({
                              routeName: "OpenGroup",
                              params: {
                                groupId: display.id
                              }
                            });
                          }}
                        />
                      </View>
                    );
                  })}
                </View>
              );
            }}
          </Query>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
    // marginBottom: 10
  },
  groupHolder: {
    backgroundColor: "#e0e0e0",
    marginTop: 20,
    padding: 20
  }
});
