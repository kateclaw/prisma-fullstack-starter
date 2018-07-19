import React from "react";
import { View, Text } from "react-native";

class Feed extends React.Component {
  render() {
    return (
      <View>
        {this.props.posts.map(post => {
          return <Text> {post.text}</Text>;
        })}
      </View>
    );
  }
}

export default Feed;
