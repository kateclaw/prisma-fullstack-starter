import React from "react";
import { View, Text } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";


const GET_POSTS = gql`
  query postsForGroup($group: ID!) {
    postsForGroup(group: $group) {
      text
    }
  }
`;

class Feed extends React.Component {
  render() {
  
    return (
      <View>
        <Query
          query={GET_POSTS}
          pollInterval={500}
          variables={{
            group: this.props.groupId
          }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return "Loading...";
            }

            if (error) {
              return "Oops, somehing blew up.";
            }
            console.log({
              data: data.postsForGroup
            });

            return (
              <View>
                <Text>hey</Text>
                {/* if admin => Create Post form */}

                {/* {data.me.groups.feed.map(posts => {
                    return <Text>{posts.text}</Text>;
                  })} */}
                  
              </View>
            );
          }}
        </Query>
      </View>
    );
  }
}

export default Feed;
