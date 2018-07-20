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

export default class OpenGroupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Group Feed"
      // header: null
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
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                enabled
              >
                <View style={styles.holder}>
                  <View style={styles.feedHolder}>
                    <ScrollView>
                      <Feed posts={data.postsForGroup} />
                    </ScrollView>
                  </View>
                  <View style={styles.postHolder}>
                    <Post refetchPosts={refetch} groupId={groupId} />
                  </View>
                </View>
              </KeyboardAvoidingView>
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
