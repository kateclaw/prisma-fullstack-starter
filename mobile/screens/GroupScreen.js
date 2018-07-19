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

              return (
                <View>
                  <Button
                    title="Create Group Screen"
                    onPress={() => {
                      this.props.navigation.navigate("CreateGroup");
                    }}
                  />
                  {data.me.groups.map(display => {
                    return (
                      <View>
                        <Button
                          title={display.name}
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
        </View>
      </View>
    );
  }
}
