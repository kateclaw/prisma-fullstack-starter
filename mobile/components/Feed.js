import React from "react";
import  {
    View
} from "react-native"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Post from "./Post"



class Feed extends React.Component {
    render() {
      return (
        <View>
         <View>
           <Query query={GET_POSTS}>
             {({ loading, error, data, refetch }) => {
               if (loading) {
                 return "Loading..."
                }
  
               if (error) {
                 return "Oops, somehing blew up."
                }
  
               return (
                 <View>
                   {/* if admin => Create Post form */}
  
                   {data.posts.map(post => {
                     return (
                       <Post
                         key={post.id}
                         text={post.text}
                         author={post.author}
                        />
                      )
                    })}
                  
                  </View>
                
                ) 
              }}
  
            </Query>
         </View>
        </View>
      )
    }
  }

  
  export default Feed