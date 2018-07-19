import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Button } from "react-native";
import Post from "../components/Post";
// import CreateGroupScreen from "./CreateGroupScreen";

export default class GroupScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Groups"
  };

  //    const GET_GROUPS =gql``

  render() {
    return (
      <View>
        {/* <View>
                     <Query 
                     variables={{ 
                         email: localStorage.getItem("email")
                       }}
                     query= {GET_GROUPS}>
                         {({ loading, error, data, refetch }) => {
                             if (loading) {
                                  return "Loading..."
                                }
    
                              if (error) {
                                 return "Uh oh something ain't right"
                                }
    
                             return ( 
                                    <View> 
                                      {data.groups.map(post => {
                                          return (
                                             <Post
                                                 key={tweet.id}
                                                 text={tweet.text}
                                                 author={tweet.author}
                                                />
                                            )
                                        })}
                                   </View>
                                )
                            }}
                       </Query>
                    </View> */}
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
