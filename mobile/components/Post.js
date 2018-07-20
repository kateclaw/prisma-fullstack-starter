import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  TextInput,
  AsyncStorage,
  Alert,
  Scene,
  KeyboardAvoidingView
} from "react-native";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

// FORM SET UP
import t from "tcomb-form-native";
const Form = t.form.Form;

const Post = t.struct({
  text: t.String
});

const options = {
  auto: "placeholders"
};

// //BACKEND SET UP
const CREATE_POST = gql`
  mutation createPost($text: String!, $group: ID!) {
    createPost(text: $text, group: $group) {
      id
      author {
        username
      }
      text
    }
  }
`;

export default class CreatePost extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Create Post"
    };
  };

  render() {
    return (
      <Mutation mutation={CREATE_POST}>
        {(createPost, { data, loading, error }) => {
          return (
            <View style={styles.container}>
              <Form
                style={styles.formHolder}
                ref={c => (this._CreatePostForm = c)}
                type={Post}
                options={options}
              />
              <Button
                title="Post"
                color="#911826"
                onPress={async () => {
                  const value = this._CreatePostForm.getValue();
                  const username = await AsyncStorage.getItem("username");
                  console.log({
                    text: value.text,
                    username
                  });
                  try {
                    const { data } = await createPost({
                      variables: {
                        username: username,
                        text: value.text,
                        group: this.props.groupId
                      }
                    });

                    await this.props.refetchPosts();

                    console.log({ data });
                  } catch (error) {
                    // redirect to sign up
                    console.log({ error });

                    Alert.alert(
                      "There was an error posting message. Try again!"
                    );
                  }
                }}
              />
            </View>
          );
        }}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 10
  }
});

// class Post extends React.Component{
//     render () {
//         return (
//             <View>
//               <Panel bsStyle="info">
//                  <Panel.Heading>
//                      <Panel.Title componentClass="h3">{this.props.author.name}

//                      </Panel.Title>
//                     </Panel.Heading>
//                  <Panel.Body>{this.props.text}</Panel.Body>
//                 </Panel>

//             </View>
//         )
//     }
// }

// export default Post
