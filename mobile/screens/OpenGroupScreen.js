import React from "react";
import {
  Asyncstorage,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import Feed from "../components/Feed";
import Post from "../components/Post";
import { Query } from "react-apollo";
import gql from "graphql-tag";

var DismissKeyboard = require("dismissKeyboard");

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
      title: "Group Feed",
      header: null
    };
  };

  render() {
    const username = AsyncStorage.getItem("username");
    const { navigation } = this.props;
    const groupId = navigation.state.params && navigation.state.params.groupId;
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
          {/* <View style={styles.headerTextHolder}>
            <Text style={styles.headerText}>shout!</Text>
          </View> */}
        </View>
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
                return (
                  <View style={styles.loader}>
                    <Image source={require("../assets/images/loader.gif")} />
                  </View>
                );
              }

              if (error) {
                return (
                  <Text style={styles.errorMsg}>Oops, somehing blew up.</Text>
                );
              }
              if (!data.postsForGroup) {
                return <Text style={styles.errorMsg}> No data yet! </Text>;
              }

              return (
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior="padding"
                  enabled
                >
                  <TouchableWithoutFeedback
                    onPress={() => {
                      DismissKeyboard();
                    }}
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
                  </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
              );
            }}
          </Query>
        </View>
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
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  backButton: {
    marginLeft: 10,
    marginBottom: 10
  },
  headerText: {
    marginLeft: 10,
    marginBottom: 10,
    color: "white",
    fontWeight: "bold",
    // marginLeft: 120,
    fontSize: 18
  },
  headerTextHolder: {
    flex: 1,
    alignItems: "center"
  },
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
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  errorMsg: {
    textAlign: "center"
  }
});
