import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
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

const ADMINS = gql`
  query adminsForGroup($username: String!, $group: ID!) {
    adminsForGroup(username: $username, group: $group) {
      username
    }
  }
`;

function isAdmin(username, admins) {
  if (admins.includes(username)) {
    return true;
  } else {
    return false;
  }
}
var flag = false;

export default class OpenGroupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Group Feed"
    };
  };

  render() {
    const { navigation } = this.props;
    const groupId = navigation.state.params && navigation.state.params.groupId;
    return (
      <View style={styles.container}>
        <Query
          query={GET_POSTS}
          pollInterval={500}
          variables={{
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
              return <Text> no data yet </Text>;
            }

            return (
              <View>
                {/* <Text>{groupId}</Text> */}
                <Feed posts={data.postsForGroup} />

                <Query
                  query={ADMIN}
                  variables={{
                    username: username,
                    group: groupId
                  }}
                >
                  {({ loading, error, data }) => {
                    console.log(data.adminsForGroup);
                    if (loading) {
                      return <Text> loading </Text>;
                    }
                    if (error) {
                      return <Text> error </Text>;
                    }

                    flag = false;
                    data.adminsForGroup.forEach(element => {
                      if (element.username == username) {
                        flag = true;
                      }
                    });

                    if (flag) {
                      return <Post refetchPosts={refetch} groupId={groupId} />;
                    }
                  }}
                </Query>
              </View>
              // <KeyboardAvoidingView
              //   style={{ flex: 1 }}
              //   behavior="padding"
              //   enabled
              // >
              //   <View style={styles.holder}>
              //     <View style={styles.feedHolder}>
              //       <ScrollView>
              //         <Feed posts={data.postsForGroup} />
              //       </ScrollView>
              //     </View>
              //     <View style={styles.postHolder}>
              //       <Post refetchPosts={refetch} groupId={groupId} />
              //     </View>
              //   </View>
              // </KeyboardAvoidingView>
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
    padding: 20
  },
  holder: {
    flex: 1
  },
  feedHolder: {
    flex: 0.8
  },
  postHolder: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 60,
    flex: 0.2
  }
});
