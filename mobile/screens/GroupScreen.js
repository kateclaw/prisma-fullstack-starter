import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Button, Text } from "react-native";
import Post from "../components/Post";
// import CreateGroupScreen from "../CreateGroupScreen"
// import CreateGroupScreen from "./CreateGroupScreen";

const GET_GROUPS = gql`
  query {
    me {
      groups {
        name
      }
    }
  }
`;

export default class GroupScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Groups"
  };

  render() {
    return (
      <View>
        <View>
          <Query query={GET_GROUPS} pollInterval={500}>
            {({ loading, error, data }) => {
              if (loading) {
                return "Loading...";
              }

              if (error) {
                return "Uh oh something ain't right";
              }
              console.log(`HI ${data.me}`);

              return (
                <View>
                  <Button
                    title="Create Group Screen"
                    onPress={() => {
                      this.props.navigation.navigate("CreateGroup");
                    }}
                  />
                  {data.me.groups.map(display => {
                    return <Text key={display.name}>{display.name}</Text>;
                  })}
                </View>
              );
            }}
          </Query>
        </View>
      </View>
    );
  }
}
