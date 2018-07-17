import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { MonoText } from "../components/StyledText";

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        name
        email
        username
      }
    }
  }
`;

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Mutation mutation={LOGIN}>
            {login => {
              return (
                <View>
                  <text>Log in to Tweeter</text>
                  <View>
                    <form
                      className="login-form"
                      onSubmit={async e => {
                        e.preventDefault();
                        try {
                          localStorage.setItem("username", this.state.username);
                          const { data } = await login({
                            variables: {
                              username: this.state.email,
                              password: this.state.password
                            }
                          });
                          localStorage.setItem("token", data.login.token);
                          localStorage.setItem(
                            "user",
                            JSON.stringify(data.login.user)
                          );
                          // this.props.history.push(`/home`);
                          // this.props.history.push(`/${data.login.user.username}`)
                        } catch (error) {
                          localStorage.removeItem("token");
                          localStorage.removeItem("user");
                          localStorage.removeItem("username");
                        }
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Username"
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                      <button type="submit">Log in</button>
                    </form>
                  </View>
                </View>
              );
            }}
          </Mutation>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require("../assets/images/robot-dev.png")
                  : require("../assets/images/robot-prod.png")
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            >
              <MonoText style={styles.codeHighlightText}>
                screens/HomeScreen.js
              </MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity
              onPress={this._handleHelpPress}
              style={styles.helpLink}
            >
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}
          >
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
