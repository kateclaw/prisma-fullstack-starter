import React from "react";
import {
  Platform,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import GroupScreen from "../screens/GroupScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CreateGroupScreen from "../screens/CreateGroupScreen";
import OpenGroupScreen from "../screens/OpenGroupScreen";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    headerMode: "none"
  }
);

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen
  },
  {
    headerMode: "none"
  }
);

const GroupStack = createStackNavigator(
  {
    Group: GroupScreen
  },
  {
    headerMode: "none"
  }
);

const SignupStack = createStackNavigator(
  {
    Signup: SignupScreen
  },
  {
    headerMode: "none"
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    headerMode: "none"
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10
  }
});

const DrawerStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack
    },
    Groups: {
      screen: GroupStack
    },
    Profile: {
      screen: ProfileStack
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createStackNavigator(
  {
    DrawerStack: {
      screen: DrawerStack
    },
    CreateGroup: {
      screen: CreateGroupScreen
    },
    Login: {
      screen: LoginScreen
    },
    Signup: {
      screen: SignupScreen
    },
    OpenGroup: {
      screen: OpenGroupScreen
    }
  },
  {
    initialRouteName: "DrawerStack",
    headerMode: "screen",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "#911826" },
      title: "shout!",
      headerTintColor: "white",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("../assets/images/hamburger-icon.png")}
            style={[styles.icon]}
          />
        </TouchableOpacity>
      )
    })
  }
);
