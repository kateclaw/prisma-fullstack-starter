import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Button } from "react-native";
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
          <Query
            // onLoad={async () =>{
            //  const name = await AsyncStorage.getItem("");
            // }}
            //  variables={{
            //      email: email
            //     }}
            query={GET_GROUPS}
          >
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
                  {/* <CreateGroupScreen refetchGroups={refetch}/> */}
                  {/* {data.groups.map(post => {
                                          return (
                                             <Post
                                                 key={post.id}
                                                 text={post.text}
                                                 author={post.author}
                                                />
                                            )
                                        })} */}

                  {data.me.groups.map(display => {
                    return <Text key={display.groups}>{display.name}</Text>;
                  })}
                </View>
              );
            }}
          </Query>
        </View>

        <Button
          title="Create Group Screen"
          onPress={() => {
            {
              this.props.navigation.navigate("CreateGroup");
            }
          }}
        />
      </View>
    );
  }
}
