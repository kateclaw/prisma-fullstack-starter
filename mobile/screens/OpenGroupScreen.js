import React from "react";
import { View, Text, AsyncStorage, Alert } from "react-native";
import Feed from "../components/Feed";
import Post from "../components/Post";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_POSTS = gql`
  query postsForGroup($group: ID!) {
    postsForGroup(group: $group) {
      text
    }
  }
`;

const ADMIN_CHECK = gql`
  query userCanPost($username: String!, $group: ID!) {
    userCanPost(username: $username, group: $group)
  }
`;

// {async() => {const username = await AsyncStorage.getItem("username")}}

export default class OpenGroupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Group Feed Screen"
    };
  };

  render() {
    const username = AsyncStorage.getItem("username");
    const { navigation } = this.props;
    const groupId = navigation.state.params && navigation.state.params.groupId;
    return (
      <View>
        <Query
          query={GET_POSTS}
          pollInterval={500}
          variables={{
            username: username,
            group: groupId
          }}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return <Text>Loading...</Text>;
            }

            if (error) {
              return <Text>Oops, somehing blew up.</Text>;
            }
            if (!data.postsForGroup) {
              return <Text> no data yet</Text>;
            }

            return (
              <View>
                {/* <Text>{groupId}</Text> */}
                <Feed posts={data.postsForGroup} />

                <Query
                  query={ADMIN_CHECK}
                  variables={{
                    username: username,
                    group: groupId
                  }}
                >
                  {({ loading, error, data }) => {
                    console.log(data.userCanPost);

                    if (data.userCanPost) {
                      return <Post refetchPosts={refetch} groupId={groupId} />;
                    }
                  }}
                </Query>
              </View>
            );
          }}
        </Query>
      </View>
    );
  }
}
