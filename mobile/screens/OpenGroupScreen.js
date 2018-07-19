import React from "react";
import { View, Text } from "react-native";
import Feed from "../components/Feed";
import gql from "graphql-tag";
import Post from "../components/Post";

export default class OpenGroupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Group Feed Screen"
    };
  };

  render() {
    const { navigation } = this.props;
    const groupId = navigation.state.params && navigation.state.params.groupId;
    return (
      <View>
        <Feed groupId={groupId} />
        <Post groupId={groupId} />
      </View>
    );
  }
}
